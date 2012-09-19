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
  this.constructor.prototype.init.call(this, element, options);

  this.measureElems = new Array(); // indexed same as MusicXML (typically from 1)
  var allMeasures = this.element.getElementsByTagName('measure');
  for (var i = 0; i < allMeasures.length; i++) {
    var num = parseInt(allMeasures[i].getAttribute('number'));
    if (isNaN(num)) continue;
    if (! (num in this.measureElems))
      this.measureElems[num] = allMeasures[i];
  }

  this.staves = new Array(); // indexed from 1
  // Find first measure that exists
  for (var i = 0; i < this.measureElems.length; i++)
    if (i in this.measureElems) {
      var measure = this.measureElems[i];
      var print = measure.getElementsByTagName('print')[0];
      if (! print) break;
      var staffLayouts = print.getElementsByTagName('staff-layout');
      for (var j = 0; j < staffLayouts.length; j++) {
        var layout = staffLayouts[j];
        var staff_num = parseInt(layout.getAttribute('number'));
        if (isNaN(staff_num)) continue;
        this.staves[staff_num] = new Vex.Flow.VeXML.PartStaff(this, {staff_num: staff_num});
      }
      break;
    }
}

Vex.Flow.VeXML.Part.prototype.getNumberOfMeasures = function() {
  return this.element.getElementsByTagName('measure').length;
}

Vex.Flow.VeXML.Part.prototype.getMeasure = function(measureNum, options) {
  if (! (measureNum in this.measureElems))
    return undefined;
  return new Vex.Flow.VeXML.Measure(this.measureElems[measureNum], options);
}

Vex.Flow.VeXML.Part.prototype.getNumberOfStaves = function() {
  if (this.staves.length) return this.staves.length - 1;
  else return 1;
}

Vex.Flow.VeXML.Part.prototype.getStaff = function(staff_num) {
  if (! this.staves.length && staff_num == 1)
    return this;
  if (! staff_num in this.staves)
    return undefined;
  return this.staves[staff_num];
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
        vfVoices = new Array(),
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
      var voiceNums = staffMeasure.getVoiceNumbers();
      if (! voiceNums.length) voiceNums = [0];
      for (var v = 0; v < voiceNums.length; v++) {
        var voice = staffMeasure.getVoice(voiceNums[v]);
        voices.push(voice);
        vfVoices.push(voice.createVexflowVoice(undefined,{stave:stave}));
        voiceStaves.push(stave);
      }
      var notesWidth = stave.getNoteEndX() - stave.getNoteStartX();
      var formatter = new Vex.Flow.Formatter().joinVoices(vfVoices);
      formatter.format(vfVoices, notesWidth);
      for (var v = 0; v < voices.length; v++)
        voices[v].drawVexflow(undefined, context, voiceStaves[v]);
      voices = new Array();
      voiceStaves = new Array();
    }
  }
}
