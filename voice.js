// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Voice - Represents a set of notes in the same voice, which may span
// multiple Measures and/or PartStaffs.

Vex.Flow.VeXML.Voice = function(partElement, options) {
  if (arguments.length > 0) this.init(partElement, options);
}

Vex.Flow.VeXML.Voice.prototype.init = function(partElement, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (! this.options.voiceNum)
    throw new Error('VeXML.Voice requires a voiceNum');
  this.partElement = partElement;
}

Vex.Flow.VeXML.Voice.prototype.getMeasure = function(measureNum, options) {
  
}
