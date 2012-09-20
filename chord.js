// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Chord - Represents a group of MusicXML Notes in a chord.

Vex.ML.Chord = function(pitches, duration, options) {
  if (arguments.length > 0) this.init(pitches, duration, options);
}

Vex.ML.Chord.prototype.init = function(pitches, duration, options) {
  this.pitches = pitches;
  this.duration = duration;
  this.options = {};
  Vex.Merge(this.options, options);
}

Vex.ML.Chord.prototype.setPitches = function(pitches) {
  this.pitches = pitches;
  return this; }

Vex.ML.Chord.prototype.getPitches = function() {
  return this.pitches; }

Vex.ML.Chord.prototype.getDuration = function () {
  return this.duration; }
