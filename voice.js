// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Voice - Represents a set of notes in the same voice, which may span
// multiple Measures and/or PartStaffs.

Vex.Flow.VeXML.Voice = function(parentElement, options) {
  if (arguments.length > 0) this.init(parentElement, options);
}

Vex.Flow.VeXML.Voice.prototype.init = function(parentElement, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (! this.options.voiceNum)
    throw new Error('VeXML.Voice requires a voiceNum');
  this.parentElement = partElement;
}

Vex.Flow.VeXML.Voice.prototype.getMeasure = function(measureNum, options) {
  
}
