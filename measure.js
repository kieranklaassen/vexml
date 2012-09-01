Vex.Flow.VeXML.Measure = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}

Vex.Flow.VeXML.Measure.prototype.init = function(element, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (element.nodeName != 'measure')
    throw new Error("VeXML.Measure must be created from a measure element, not " + element.nodeName);
  this.element = element;
}
