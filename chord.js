// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Chord - Represents a group of MusicXML Notes in a chord.

Vex.Flow.VeXML.Chord = function(pitches, duration, options) {
  if (arguments.length > 0) this.init(pitches, duration, options);
}

Vex.Flow.VeXML.Chord.prototype.init = function(pitches, duration, options) {
  this.pitches = pitches;
  this.duration = duration;
  this.options = {};
  Vex.Merge(this.options, options);
}

Vex.Flow.VeXML.Chord.prototype.setPitches = function(pitches) {
  this.pitches = pitches;
  return this; }

Vex.Flow.VeXML.Chord.prototype.getPitches = function() {
  return this.pitches; }

Vex.Flow.VeXML.Chord.prototype.getDuration = function () {
  return this.duration; }
