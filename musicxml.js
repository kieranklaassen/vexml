/** @constructor */
Vex.ML.Document = function(data, options) {
  if (arguments.length > 0) this.init(data, options);
}

Vex.ML.Document.init = function(data, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (data instanceof String) {
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
}
