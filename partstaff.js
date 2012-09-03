// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// PartStaff - Represents a set of notes drawn on the same staff, which may span
// multiple Measures and/or Voices.

Vex.Flow.VeXML.PartStaff = function(partElement, options) {
  if (arguments.length > 0) this.init(partElement, options);
}

Vex.Flow.VeXML.PartStaff.prototype.init = function(partStaff, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (! this.options.staffNum)
    throw new Error('VeXML.PartStaff requires a staffNum');
  this.partElement = partElement;
}

Vex.Flow.VeXML.Voice.prototype.getMeasure = function(measureNum, options) {
  
}
