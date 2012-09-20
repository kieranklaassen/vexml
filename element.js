// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Element - Abstract class wrapping a particular XML element.

Vex.ML.Element = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}
Vex.ML.Element.nodeName = null;

Vex.ML.Element.prototype.init = function(element, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  this.element = element;
  if (this.nodeName &&
      this.element.nodeName != this.nodeName) {
    throw new Vex.Flow.Error('Cannot create "' + this.constructor.name
      + '" with a "' + this.element.nodeName + '" element.'); }
}
