// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Document - Represents an entire MusicXML document.

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
  if (this.documentElement.nodeName != 'score-partwise')
    throw new Error("VeXML only supports partwise scores");
}

Vex.Flow.VeXML.Document.prototype.serialize = function() {
  var serializer = new XMLSerializer();
  return serializer.serializeToString(this.doc);
}

Vex.Flow.VeXML.Document.prototype.getPartIDs = function() {
  var partList = this.doc.getElementsByTagName('part-list')[0];
  if (! partList) return {};
  var allPartIDs = partList.getElementsByTagName('score-part');
  var parts = []
  for (var i=0; i < allPartIDs.length; i++) {
    var part = allPartIDs[i];
    parts.push(part.getAttribute('id'));
  }
  return parts;
}

Vex.Flow.VeXML.Document.prototype.getPart = function(partNum) {
  var partIDs = this.getPartIDs();
  var id;
  if (typeof partNum == 'number') {
    id = partIDs[partNum]; }
  else {
    id = partNum; }
  if (partNum >= partIDs.length) return null;
  var allParts = this.doc.getElementsByTagName('part');
  var partElement = undefined;
  for (var i = 0; i < allParts.length; i++)
    if (allParts[i].getAttribute('id') == id) {
      partElement = allParts[i];
      break;
    }
  var part = new Vex.Flow.VeXML.Part(partElement);
  return part;
}
