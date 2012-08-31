/** @constructor */
Vex.Flow.VeXML.Document = function(data, options) {
  if (arguments.length > 0) this.init(data, options);
}

Vex.Flow.VeXML.Document.prototype.init = function(data, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (typeof data == "string") {
    // Parse XML string
    if (window.DOMParser && typeof XMLDocument != "undefined")
      { this.doc = (new window.DOMParser()).parseFromString(data, "text/xml"); }
    else if (typeof window.ActiveXObject != "undefined" &&
              new window.ActiveXObject("Microsoft.XMLDOM")) {
      this.doc = new window.ActiveXObject("Microsoft.XMLDOM");
      this.doc.async = "false";
      this.doc.loadXML(data);
    }
    else
      { throw new Error("No XML parser found"); }
  }
  else if (data instanceof Document)
    { this.doc = data; }
  else {
    throw new Error("Can't load MusicXML document from a " + data.constructor.name);
  }
  this.documentElement = this.doc.documentElement;
}

Vex.Flow.VeXML.Document.prototype.serialize = function() {
  var serializer = new XMLSerializer();
  return serializer.serializeToString(this.doc);
}
