// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Voice - Represents a set of notes in the same voice, which may span
// multiple Measures and/or PartStaffs.

Vex.ML.Voice = function(parentElement, options) {
  if (arguments.length > 0) this.init(parentElement, options);
}

Vex.ML.Voice.prototype.init = function(parentElement, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (! ('voice_num' in this.options))
    throw new Error('VeXML.Voice requires a voice_num');
  this.parentElement = parentElement;

  // Will be used to store VexFlow objects
  this.vexflowNotes = undefined;
  this.vexflowObjects = undefined;
  this.vexflowVoice = undefined;
}

Vex.ML.Voice.prototype.getMeasure = function(measureNum, options) {
  // Support Part, etc. as parent element by creating a Measure object from them
  if (! (this.parentElement instanceof Vex.ML.Measure)) {
    if (! ('getMeasure' in this.parentElement))
      return undefined;
    var parentMeasure = this.parentElement.getMeasure(measureNum, options);
    if (! (parentMeasure.prototype instanceof Vex.ML.Measure))
      // Prevent infinite recursion
      return undefined;
    return (new Vex.ML.Voice(parentMeasure, this.options)).getMeasure(measureNum, options);
  }
  
  // If voice_num is 0 and the original measure has no explicit voices,
  // just return the original measure
  if (this.options.voice_num == 0 &&
      this.parentElement.getVoiceNumbers().length == 0)
    return this.parentElement;
  
  var clone = this.parentElement.element.cloneNode(false);
  var childNodes = this.parentElement.element.childNodes;
  for (var i = 0; i < childNodes.length; i++) {
    var node = childNodes[i];
    if (node.tagName == 'note') {
      var voice = node.getElementsByTagName('voice')[0];
      if (! voice) continue;
      var voiceNum = parseInt(voice.textContent);
      if (voiceNum == this.options.voice_num)
        clone.appendChild(node.cloneNode(true));
    }
    else
      clone.appendChild(node.cloneNode(true));
  }

  var measureOptions = {};
  Vex.Merge(measureOptions, options);
  return new Vex.ML.Measure(clone, measureOptions);
}

Vex.ML.Voice.prototype.createVexflowNotes = function(measureNum) {
  var notes = this.getMeasure(measureNum).getNotes();
  this.vexflowNotes = new Array();
  this.vexflowObjects = new Array();
  this.vexflowVoice = undefined;

  // Array of array of vfNotes in each voice, indexed by MusicXML beam number
  var beamNotes = new Array();
  // Array of each vfNote being added to a tie
  var tiedNotes = new Array();

  for (var i = 0; i < notes.length; i++) {
    var noteOptions = { keys: notes[i].getPitches(),
                        duration: notes[i].getDuration() };
    if (noteOptions.duration.indexOf('r') == -1
        && 'clef' in this.options) {
      // Is not a rest
      noteOptions.clef = this.options.clef;
    }
    else
      undefined;
    var vfNote = new Vex.Flow.StaveNote(noteOptions);

    // Add dots
    for (var d = 0; d < notes[i].numDots; d++)
      vfNote.addDotToAll();
    // Add accidentals
    if ('accidental' in notes[i])
      vfNote.addAccidental(0, new Vex.Flow.Accidental(notes[i].accidental));
    this.vexflowNotes.push(vfNote);

    if (notes[i].beam) {
      var beam = notes[i].beam;
      if (! beam.number || isNaN(beam.number)) continue;
      if (beam.type == 'begin')
        beamNotes[beam.number] = [vfNote];
      else if (beam.type == 'end') {
        beamNotes[beam.number].push(vfNote);
        this.vexflowObjects.push(new Vex.Flow.Beam(beamNotes[beam.number]));
        delete beamNotes[beam.number];
      }
      else if (! beam.number in beamNotes)
        continue;
      else
        beamNotes[beam.number].push(vfNote);
    }
    if ('tieType' in notes[i]) {
      if (notes[i].tieType == 'start') tiedNotes = [vfNote];
      else {
        tiedNotes.push(vfNote);
        if (notes[i].tieType == 'stop') {
          // Tie each consecutive pair of notes
          for (var i = 0; i + 1 < tiedNotes.length; i++)
            this.vexflowObjects.push(new Vex.Flow.StaveTie({
              first_note: tiedNotes[i],
              last_note: tiedNotes[i+1],
              first_indices: [0], // FIXME: Chord support
              last_indices: [0],
            }));
        }
        tiedNotes = new Array();
      }
    }
  }
  return this.vexflowNotes;
}

Vex.ML.Voice.prototype.createVexflowVoice = function(measureNum, options) {
  this.createVexflowNotes();
  var voiceOptions = {
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  };
  var measure = this.getMeasure(measureNum);
  if (measure.clef)
    voiceOptions.clef = measure.clef;
  Vex.Merge(voiceOptions, options);
  this.vexflowVoice = new Vex.Flow.Voice(voiceOptions);
  for (var i = 0; i < this.vexflowNotes.length; i++)
    this.vexflowNotes[i].setStave(options.stave);
  this.vexflowVoice.setStrict(false).addTickables(this.vexflowNotes);
  return this.vexflowVoice;
}

Vex.ML.Voice.prototype.drawVexflow = function(measureNum, context, stave) {
  if (! this.vexflowVoice) return undefined;
  this.vexflowVoice.draw(context, stave);

  // Draw each VexFlow object
  for (var i = 0; i < this.vexflowObjects.length; i++)
    this.vexflowObjects[i].setContext(context).draw();
  
  return true;
}
