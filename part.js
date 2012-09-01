Vex.Flow.VeXML.Part = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}

Vex.Flow.VeXML.Part.prototype.init = function(element, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (element.nodeName != 'part')
    throw new Error("VeXML.Part must be created from a part element, not " + element.nodeName);
  this.element = element;
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
