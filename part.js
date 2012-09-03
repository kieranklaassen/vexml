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
      var measure = new Vex.Flow.VeXML.Measure(allMeasures[i]);
      return measure;
    }
  }
}

Vex.Flow.VeXML.Part.prototype.getNumberOfStaffs = function() {
  return this.getMeasure(1).getStaffNumbers().length;
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
      throw new Error("Cannot engrave multiple measures on a single stave"); }
    staves = [staves];
  }
  for (var i = 0; i < staves.length; i++) {
    var measureNum = measureStart + i,
        measure = this.getMeasure(measureNum),
        notes = measure.getNotes();
    // Only supports one staff per part
    var stave = staves[i];
    var notesWidth = stave.getNoteEndX() - stave.getNoteStartX();
    var vfNotes = new Array();
    for (var i = 0; i < notes.length; i++) {
      vfNotes[i] = new Vex.Flow.StaveNote({ keys: [notes[i].pitch],
                                            duration: notes[i].duration });
    }
    var vfVoice = new Vex.Flow.Voice({
      num_beats: 4,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    });
    vfVoice.addTickables(vfNotes);
    var formatter = new Vex.Flow.Formatter().joinVoices([vfVoice]);
    formatter.format([vfVoice], notesWidth);
    vfVoice.draw(context, stave);
  }
}
