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
  if (! this.options.voice_num)
    throw new Error('VeXML.Voice requires a voice_num');
  this.parentElement = parentElement;
}

Vex.Flow.VeXML.Voice.prototype.getMeasure = function(measureNum, options) {
  // Support Part, etc. as parent element by creating a Measure object from them
  if (! (this.parentElement instanceof Vex.Flow.VeXML.Measure)) {
    if (! ('getMeasure' in this.parentElement))
      return undefined;
    var parentMeasure = this.parentElement.getMeasure(measureNum, options);
    if (! (parentMeasure.prototype instanceof Vex.Flow.VeXML.Measure))
      // Prevent infinite recursion
      return undefined;
    return (new Vex.Flow.VeXML.Voice(parentMeasure, this.options)).getMeasure(measureNum, options);
  }
  
  // parentElement is a VeXML.Measure
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
  return new Vex.Flow.VeXML.Measure(clone, measureOptions);
}
