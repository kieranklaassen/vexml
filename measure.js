// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Measure - Represents one measure of a Part.

Vex.ML.Measure = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}

// Inherits from Vex.ML.Element
Vex.ML.Measure.prototype = new Vex.ML.Element();
Vex.ML.Measure.superclass = Vex.ML.Element;
Vex.ML.Measure.constructor = Vex.ML.Measure;
Vex.ML.Measure.prototype.nodeName = 'measure';

Vex.ML.Measure.prototype.init = function(element, options) {
  this.constructor.prototype.init.call(this, element, options);
  var attributes = this.element.getElementsByTagName('attributes')[0];
  if (! attributes) { return; }
  this.attributes = attributes;
  // MusicXML's "divisions" divide a quarter note to get the value of
  // a note duration of 1. This can vary in each measure.
  var divisions = attributes.getElementsByTagName('divisions')[0];
  if (! divisions) { return undefined; }
  divisions = parseInt(divisions.textContent);
  if (! divisions) { return undefined; }
  this.divisions = divisions;
  // Vex.Flow.RESOLUTION == 4 quarter notes
  this.ticksPerDivision = Vex.Flow.RESOLUTION / (4 * divisions);
  
  var clefs = this.attributes.getElementsByTagName('clef');
  if (clefs.length == 1)
    this.clef = Vex.ML.Attributes.Clef(clefs[0]);
  else if ('clef' in this.options)
    this.clef = this.options.clef;
  else
    this.clef = undefined;
}

Vex.ML.Measure.prototype.getStaffNumbers = function() {
  var staffNumbers = new Array();

  // Should contain a "print" element with "staff-layout" children.
  // TODO: Find all staff numbers in use if the "print" element does not exist.
  var printElem = this.element.getElementsByTagName('print')[0];
  if (! printElem) {
    return [1];
  }
  var staffLayouts = printElem.getElementsByTagName('staff-layout');
  for (var i = 0; i < staffLayouts.length; i++)
    staffNumbers.push(parseInt(staffLayouts[i].getAttribute('number')));
  if (! staffNumbers.length) staffNumbers.push(1);
  return staffNumbers;
}

Vex.ML.Measure.prototype.getStaff = function(staffNum) {
  return new Vex.ML.PartStaff(this, {staffNum: parseInt(staffNum)});
}

Vex.ML.Measure.prototype.getVoiceNumbers = function() {
  var voices = new Array();
  var notes = this.element.getElementsByTagName('note');
  NOTE:
  for (var i = 0; i < notes.length; i++) {
    var voiceElem = notes[i].getElementsByTagName('voice')[0];
    if (! voiceElem) continue;
    var voiceNum = parseInt(voiceElem.textContent);
    if (isNaN(voiceNum)) continue;
    // See if voice is already in voices array
    for (var j = 0; j < voices.length; j++)
      if (voices[j] == voiceNum)
        continue NOTE;
    voices.push(voiceNum);
  }
  return voices;
}

Vex.ML.Measure.prototype.getVoice = function(voiceNum, opts) {
  var options = {voice_num: voiceNum};
  Vex.Merge(options, opts);
  return new Vex.ML.Voice(this, options);
}

Vex.ML.Measure.prototype.getNotes = function(options) {
  var noteObjects = new Array(),
      noteElements = this.element.getElementsByTagName('note'),
      noteOptions = {measure: this};
  Vex.Merge(noteOptions, options);
  for (var i = 0; i < noteElements.length; i++) {
    var noteObj = new Vex.ML.Note(noteElements[i].cloneNode(true), noteOptions);

    // Add note to the last note (or chord) and create a chord,
    // if this is not the first note
    if (noteElements[i].getElementsByTagName('chord').length == 1 && i != 0) {
      var lastObject = noteObjects[noteObjects.length-1];
      if (lastObject instanceof Vex.ML.Chord) {
        var pitches = lastObject.getPitches();
        pitches.push(noteObj.pitch);
        lastObject.setPitches(pitches);
      }
      else {
        var pitches = lastObject.getPitches();
        Array.prototype.push.apply(pitches, noteObj.getPitches());
        var chord = new Vex.ML.Chord(pitches, lastObject.getDuration());
        noteObjects[noteObjects.length-1] = chord;
      }
    }
    else {
      noteObjects.push(noteObj);
    }
  }
  return noteObjects;
}

// Return a list of VexFlow stave modifiers
Vex.ML.Measure.prototype.getStaveModifiers = function(opts) {
  var options = {};
  Vex.Merge(options, opts);
  var modifiers = new Array();
  if (options['line_start']) {
    var clef = this.attributes.getElementsByTagName('clef')[0];
    if (clef) modifiers.push(new Vex.Flow.Clef(Vex.ML.Attributes.Clef(clef)));
    var key = this.attributes.getElementsByTagName('key')[0];
    if (key) modifiers.push(new Vex.Flow.KeySignature(Vex.ML.Attributes.Key(key).pitch));
    var time = this.attributes.getElementsByTagName('time')[0];
    if (time) modifiers.push(new Vex.Flow.TimeSignature(Vex.ML.Attributes.Time(time).symbol));
  }
  return modifiers;
}
