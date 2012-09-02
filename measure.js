Vex.Flow.VeXML.Measure = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}
Vex.Flow.VeXML.Measure.nodeName = 'measure';

// Inherits from Vex.Flow.VeXML.Element
Vex.Flow.VeXML.Measure.prototype = new Vex.Flow.VeXML.Element();
Vex.Flow.VeXML.Measure.superclass = Vex.Flow.VeXML.Element;
Vex.Flow.VeXML.Measure.constructor = Vex.Flow.VeXML.Measure;

Vex.Flow.VeXML.Measure.prototype.init = function(element, options) {
  this.constructor.prototype.init.call(this, element, options);
  var attributes = this.element.getElementsByTagName('attributes')[0];
  if (! attributes) { return undefined; }
  // MusicXML's "divisions" divide a quarter note to get the value of
  // a note duration of 1. This can vary in each measure.
  var divisions = attributes.getElementsByTagName('divisions')[0];
  if (! divisions) { return undefined; }
  divisions = parseInt(divisions.textContent);
  if (! divisions) { return undefined; }
  this.divisions = divisions;
  // Vex.Flow.RESOLUTION == 4 quarter notes
  this.ticksPerDivision = Vex.Flow.RESOLUTION / (4 * divisions);
}

Vex.Flow.VeXML.Measure.prototype.getNotes = function(options) {
  var noteObjects = new Array(),
      noteElements = this.element.getElementsByTagName('note'),
      noteOptions = {'measure': this};
  Vex.Merge(noteOptions, options);
  for (var i = 0; i < noteElements.length; i++)
    noteObjects.push(new Vex.Flow.VeXML.Note(noteElements[i], noteOptions));
  return noteObjects;
}
