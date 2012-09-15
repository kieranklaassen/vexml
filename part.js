// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Part - Represents an entire MusicXML part, which may contain multiple
// PartStaffs and/or Voices, which contain Notes.

Vex.Flow.VeXML.Part = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}

// Inherits from Vex.Flow.VeXML.Element
Vex.Flow.VeXML.Part.prototype = new Vex.Flow.VeXML.Element();
Vex.Flow.VeXML.Part.superclass = Vex.Flow.VeXML.Element;
Vex.Flow.VeXML.Part.constructor = Vex.Flow.VeXML.Part;
Vex.Flow.VeXML.Part.prototype.nodeName = 'part';

Vex.Flow.VeXML.Part.prototype.init = function(element, options) {
  // Why does this refer to the superclass???
  this.constructor.prototype.init.call(this, element, options);
}

Vex.Flow.VeXML.Part.prototype.getNumberOfMeasures = function() {
  return this.element.getElementsByTagName('measure').length;
}

Vex.Flow.VeXML.Part.prototype.getMeasure = function(measureNum, options) {
  var allMeasures = this.element.getElementsByTagName('measure');
  for (var i = 0; i < allMeasures.length; i++) {
    if (allMeasures[i].getAttribute('number') == measureNum) {
      var measure = new Vex.Flow.VeXML.Measure(allMeasures[i], options);
      return measure;
    }
  }
}

Vex.Flow.VeXML.Part.prototype.getNumberOfStaves = function() {
  return this.getMeasure(1).getStaffNumbers().length;
}

Vex.Flow.VeXML.Part.prototype.getStaff = function(staff_num, options) {
  var newOptions = {staff_num: staff_num};
  Vex.Merge(newOptions, options);
  return new Vex.Flow.VeXML.PartStaff(this, newOptions);
}

Vex.Flow.VeXML.Part.prototype.getAttributes = function(measureNum) {
  // Find the last measure containing an attributes section
  for (var i = measureNum; i >= 0; i--) {
    var measure = this.getMeasure(i);
    if (measure.attributes)
      return measure.attributes;
  }
}

// Should be used to engrave one line of one part
Vex.Flow.VeXML.Part.prototype.engraveMeasuresOnStaves = function(
                                    measureStart, measureEnd, staves, context) {
  // "staves" can be a single stave if there is only one measure
  if (! (staves instanceof Array)) {
    if (measureStart != measureEnd) {
      throw new Error("Cannot engrave multiple Measures on a single Stave"); }
    staves = [staves];
  }
  var staff = this.getStaff(1);
  for (var i = 0; i < staves.length; i++) {
    var measureStaves = staves[i],
        measureNum = measureStart + i,
        measure = staff.getMeasure(measureNum),
        voices = new Array(),
        voiceStaves = new Array();
    if (measureStaves instanceof Vex.Flow.Stave) {
      measureStaves = [measureStaves];
    }
    for (var staveNum = 0; staveNum < measureStaves.length; staveNum++) {
      var stave = measureStaves[staveNum];
      var partStaff = undefined, staffMeasure;
      if (measureStaves.length == 1)
        staffMeasure = this.getMeasure(measureNum);
      else {
        partStaff = this.getStaff(staveNum + 1);
        staffMeasure = partStaff.getMeasure(measureNum);
      }
      var notes = staffMeasure.getNotes();
      var vfNotes = new Array();
      for (var n = 0; n < notes.length; n++) {
        var noteOptions = { keys: notes[n].getPitches(),
                            duration: notes[n].getDuration() };
        if (noteOptions.duration.indexOf('r') == -1
            && partStaff && 'clef' in partStaff) {
          // Is not a rest
          noteOptions.clef = partStaff.clef;
          console.log('clef ' + staffMeasure.clef);
          console.warn(noteOptions.keys);
        }
        vfNotes[n] = new Vex.Flow.StaveNote(noteOptions);
      }
      voices.push(new Vex.Flow.Voice({
        num_beats: 4,
        beat_value: 4,
        resolution: Vex.Flow.RESOLUTION
      }).setStrict(false).addTickables(vfNotes));
      voiceStaves.push(stave);
    }
    var notesWidth = stave.getNoteEndX() - stave.getNoteStartX();
    var formatter = new Vex.Flow.Formatter().joinVoices(voices);
    formatter.format(voices, notesWidth);
    for (var v = 0; v < voices.length; v++) {
      voices[v].draw(context, voiceStaves[v]);
    }
    /*var stave = staves[i];
    if (stave instanceof Array)
      stave = stave[0];
    var notesWidth = stave.getNoteEndX() - stave.getNoteStartX();
    var vfNotes = new Array();
    for (var i = 0; i < notes.length; i++) {
      vfNotes[i] = new Vex.Flow.StaveNote({ keys: notes[i].getPitches(),
                                            duration: notes[i].getDuration() });
    }
    var vfVoice = new Vex.Flow.Voice({
      num_beats: 4,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    }).setStrict(false);
    vfVoice.addTickables(vfNotes);
    var formatter = new Vex.Flow.Formatter().joinVoices([vfVoice]);
    formatter.format([vfVoice], notesWidth);
    vfVoice.draw(context, stave);*/
  }
}
