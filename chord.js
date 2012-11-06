// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Chord - Represents a group of MusicXML Notes in a chord.

Vex.ML.Chord = function(firstNote, options) {
  if (arguments.length > 0) this.init(firstNote, options);
}

Vex.ML.Chord.prototype.init = function(firstNote, options) {
  this.pitches = firstNote.getPitches();
  this.duration = firstNote.getDuration();
  for (var prop in firstNote)
    // Don't want element property or other properties
    if (firstNote.hasOwnProperty(prop) && prop != 'element')
      this[prop] = firstNote[prop];
  this.options = {};
  Vex.Merge(this.options, options);
}

Vex.ML.Chord.prototype.addNote = function(note) {
  var pitches = note.getPitches();
  for (var i = 0; i < pitches.length; i++)
    this.pitches.push(pitches[i]);
}

Vex.ML.Chord.prototype.setPitches = function(pitches) {
  this.pitches = pitches;
  return this; }

Vex.ML.Chord.prototype.getPitches = function() {
  return this.pitches; }

Vex.ML.Chord.prototype.getDuration = function() {
  return this.duration; }
