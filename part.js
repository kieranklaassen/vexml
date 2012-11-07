// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Part - Represents an entire MusicXML part, which may contain multiple
// PartStaffs and/or Voices, which contain Notes.

Vex.ML.Part = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}

// Inherits from Vex.ML.Element
Vex.ML.Part.prototype = new Vex.ML.Element();
Vex.ML.Part.superclass = Vex.ML.Element;
Vex.ML.Part.constructor = Vex.ML.Part;
Vex.ML.Part.prototype.nodeName = 'part';

Vex.ML.Part.prototype.init = function(element, options) {
  this.constructor.prototype.init.call(this, element, options);

  this.firstMeasure = null; // normally 1 (0 if pickup measure)
  this.measureElems = new Array(); // always indexed from 0
  var allMeasures = this.element.getElementsByTagName('measure');
  for (var i = 0; i < allMeasures.length; i++) {
    var num = parseInt(allMeasures[i].getAttribute('number'));
    if (isNaN(num)) continue;
    if (this.firstMeasure == null) this.firstMeasure = num;
    var index = num - this.firstMeasure;
    if (! (index in this.measureElems))
      this.measureElems[index] = allMeasures[i];
  }

  this.attributes = new Array(); // indexed in measures
  // Attributes are cached on the fly

  this.staves = new Array(); // indexed from 1
  // Find first measure that exists
  for (var i = 0; i < this.measureElems.length; i++)
    if (i in this.measureElems) {
      var measure = this.measureElems[i];
      var attr = measure.getElementsByTagName('attributes')[0];
      if (! attr) break;
      var stavesElem = attr.getElementsByTagName('staves')[0];
      if (! stavesElem) break;
      var numStaves = parseInt(stavesElem.textContent);
      if (! numStaves || isNaN(numStaves) || numStaves == 1) break;
      for (var staff_num = 1; staff_num < numStaves + 1; staff_num++)
        this.staves[staff_num] = new Vex.ML.PartStaff(this, {staff_num: staff_num});
      break;
    }
}

Vex.ML.Part.prototype.getNumberOfMeasures = function() {
  return this.measureElems.length;
}

Vex.ML.Part.prototype.getAttributes = function(measureNum, options) {
  if (measureNum in this.attributes)
    return this.attributes[measureNum];

  var lastAttrs = undefined;
  for (var i = 0; i <= measureNum; i++) {
    if (! (i in this.measureElems))
      continue;
    // If attributes present, create a new attributes element
    if (this.measureElems[i].getElementsByTagName('attributes').length) {
      var attrs = this.measureElems[i].getElementsByTagName('attributes');
      var options = {};
      if (lastAttrs) options.previous_attributes = lastAttrs;
      this.attributes[i] = lastAttrs =
        new Vex.ML.Attributes(attrs[0], options);

      // If there are multiple <attributes> tags, create a new Attributes object
      // for each one, and set lastAttrs to the last one.
      for (var j = 1; j < attrs.length; i++) {
        var options = {previous_attributes: lastAttrs};
        lastAttrs = new Vex.ML.Attributes(attrs[j], options);
      }
    }
    else {
      this.attributes[i] = Vex.ML.Attributes.createFromPrevious(lastAttrs);
    }
  }

  return this.attributes[measureNum];
}

Vex.ML.Part.prototype.getMeasure = function(measureNum, options) {
  if (! (measureNum in this.measureElems))
    return undefined;
  var measureOptions = {};
  if (this.getAttributes(measureNum).getClef())
    measureOptions.clef = this.getAttributes(measureNum).getClef();
  Vex.Merge(measureOptions, options);
  return new Vex.ML.Measure(this.measureElems[measureNum], measureOptions);
}

Vex.ML.Part.prototype.getNumberOfStaves = function() {
  if (this.staves.length) return this.staves.length - 1;
  else return 1;
}

Vex.ML.Part.prototype.getStaff = function(staff_num) {
  if (! this.staves.length && staff_num == 1)
    return this;
  if (! staff_num in this.staves)
    return undefined;
  return this.staves[staff_num];
}

// Should be used to engrave one line of one part
Vex.ML.Part.prototype.engraveMeasuresOnStaves = function(
                                    measureStart, measureEnd, staves, context) {
  // "staves" can be a single stave if there is only one measure
  if (! (staves instanceof Array)) {
    if (measureStart != measureEnd) {
      throw new Error("Cannot engrave multiple Measures on a single Stave"); }
    staves = [staves];
  }
  for (var i = 0; i < staves.length; i++) {
    var measureStaves = staves[i],
        measureNum = measureStart + i,
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
