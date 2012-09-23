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
    this.vexflowNotes.push(new Vex.Flow.StaveNote(noteOptions));
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
  return true;
}
