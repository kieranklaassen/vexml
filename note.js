// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Note - Represents a MusicXML "note" element, which may also be a rest.

Vex.Flow.VeXML.Note = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}

// Inherits from Vex.Flow.VeXML.Element
Vex.Flow.VeXML.Note.prototype = new Vex.Flow.VeXML.Element();
Vex.Flow.VeXML.Note.superclass = Vex.Flow.VeXML.Element;
Vex.Flow.VeXML.Note.constructor = Vex.Flow.VeXML.Note;
Vex.Flow.VeXML.Note.prototype.nodeName = 'note';

Vex.Flow.VeXML.Note.type = {
  "256th": "256",
  "128th": "128",
  "64th": "64",
  "32nd": "32",
  "16th": "16",
  "eighth": "8",
  "quarter": "4",
  "half": "2",
  "whole": "1",
};

Vex.Flow.VeXML.Note.prototype.init = function(element, options) {
  this.constructor.prototype.init.call(this, element, options);
  // Need 'measure' specified as an option
  if (! options.measure ||
      ! (options.measure instanceof Vex.Flow.VeXML.Measure)) {
    throw new Error("VeXML.Note requires a VeXML.Measure"); }
  var duration = this.element.getElementsByTagName('duration')[0];
  if (! duration) { throw new Error("note should contain duration"); }
  duration = parseInt(duration.textContent);
  if (isNaN(duration)) { throw new Error("can't parse note duration"); }
  this.numTicks = options.measure.ticksPerDivision * duration;
  // Symbolic note duration is usually stored as "note type"
  var noteType = this.element.getElementsByTagName('type')[0];
  if (noteType) {
    this.duration = Vex.Flow.VeXML.Note.type[noteType.textContent];
    if (! this.duration)
      throw new Error("Duration not recognized: " + noteType.textContent);
    // Add dot(s); not sure if VexFlow supports multiple "d"s for multiple dots
    var dots = this.element.getElementsByTagName('dot');
    for (var i = 0; i < dots.length; i++) {
      this.duration += 'd';
    }
    this.numDots = dots.length;
  }

  var restElem = this.element.getElementsByTagName('rest')[0];
  if (restElem) {
    this.rest = true;
    if (restElem.getAttribute('measure') == 'yes')
      this.duration = '1r';
    // VeXML always interprets rests as treble clef
    this.pitch = 'b/4';
  }
  else this.rest = false;
  var pitch = this.element.getElementsByTagName('pitch')[0];
  if (! pitch)
    { return undefined; }
  this.pitch = this.pitchToString(pitch);

  var beamElem = this.element.getElementsByTagName('beam')[0];
  if (beamElem)
    this.beam = {
      number: parseInt(beamElem.getAttribute('number')),
      type: beamElem.textContent,
    };
  else
    this.beam = null;
}

// Compatibility with VeXML.Chord
Vex.Flow.VeXML.Note.prototype.getPitches = function() {
  return [this.pitch];
}

Vex.Flow.VeXML.Note.prototype.getDuration = function() {
  return this.duration;
}

Vex.Flow.VeXML.Note.prototype.pitchToString = function(pitchElem) {
  var step = pitchElem.getElementsByTagName('step'),
      octave = pitchElem.getElementsByTagName('octave')
      alter = pitchElem.getElementsByTagName('alter');
  if (step.length == 0 || octave.length == 0)
    return undefined;
  var octaveInt = parseInt(octave[0].textContent),
      alterInt = undefined;
  if (octaveInt != 0 && ! octaveInt)
  if (alter.length)
    { alterInt = parseInt(alter[0].textContent); }
  var step = step[0].textContent;
  if (step.length != 1)
    return undefined;
  var string = step.toLowerCase();
  switch (alter) {
    case 1:
      string += '#';
      break;
    case 2:
      string += '##';
      break;
    case -1:
      string += 'b';
      break;
    case -2:
      string += 'bb';
      break;
  }
  string += '/' + octaveInt.toString();
  return string;
}
