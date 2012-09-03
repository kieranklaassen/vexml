// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// PartStaff - Represents a set of notes drawn on the same staff, which may span
// multiple Measures and/or Voices. May be created from an entire Part or just
// a single Measure of a Part.

Vex.Flow.VeXML.PartStaff = function(parentElement, options) {
  if (arguments.length > 0) this.init(parentElement, options);
}

Vex.Flow.VeXML.PartStaff.prototype.init = function(parentElement, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (! this.options.staffNum)
    throw new Error('VeXML.PartStaff requires a staffNum');
  this.parentElement = parentElement;
}

Vex.Flow.VeXML.PartStaff.prototype.getMeasure = function(measureNum, options) {
}
