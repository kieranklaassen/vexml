// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Part - Represents an entire MusicXML part, which may contain multiple
// PartStaffs and/or Voices, which contain Notes.

Vex.Flow.VeXML.Part = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}
Vex.Flow.VeXML.Part.nodeName = 'part';

// Inherits from Vex.Flow.VeXML.Element
Vex.Flow.VeXML.Part.prototype = new Vex.Flow.VeXML.Element();
Vex.Flow.VeXML.Part.superclass = Vex.Flow.VeXML.Element;
Vex.Flow.VeXML.Part.constructor = Vex.Flow.VeXML.Part;

Vex.Flow.VeXML.Part.prototype.init = function(element, options) {
  // Why does this refer to the superclass???
  this.constructor.prototype.init.call(this, element, options);
}

Vex.Flow.VeXML.Part.prototype.getMeasure = function(measureNum, options) {
  var allMeasures = this.element.getElementsByTagName('measure');
  for (var i = 0; i < allMeasures.length; i++) {
    if (allMeasures[i].getAttribute('number') == measureNum) {
      var measure = new Vex.Flow.VeXML.Measure(allMeasures[i]);
      return measure;
    }
  }
}
