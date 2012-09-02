/* Superclass for all classes based on MusicXML elements */

Vex.Flow.VeXML.Element = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}
Vex.Flow.VeXML.Element.nodeName = null;

Vex.Flow.VeXML.Element.prototype.init = function(element, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  this.element = element;
  if (this.constructor.nodeName &&
      this.element.nodeName != this.constructor.nodeName) {
    throw new Vex.Flow.Error('Cannot create "' + this.constructor.name
      + '" with a "' + this.element.nodeName + '" element.'); }
}
