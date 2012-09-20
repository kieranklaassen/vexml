// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Document - Represents an entire MusicXML document.

/** @constructor */
Vex.ML.Document = function(data, options) {
  if (arguments.length > 0) this.init(data, options);
}

Vex.ML.Document.prototype.init = function(data, options) {
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
  
  // Create Part object for each part
  this.parts = {}, this.partGroups = {};
  this.partIDs = new Array(), this.partStaves = new Array();
  var partList = this.documentElement.getElementsByTagName('part-list')[0];
  if (! partList) return undefined;
  var partListElems = partList.childNodes;
  var partGroup = null, lastID = null;
  for (var i = 0; i < partListElems.length; i++) {
    if (partListElems[i].tagName == 'score-part') {
      var id = partListElems[i].getAttribute('id');
      if (! id) continue;
      this.partIDs.push(id);
      if (partGroup) {
        this.partGroups[id] = {};
        Vex.Merge(this.partGroups[id], partGroup);
        if (partGroup.type == 'start')
          partGroup.type = 'continue';
      }
      lastID = id;
    }
    else if (partListElems[i].tagName == 'part-group') {
      var groupElem = partListElems[i];
      var num = parseInt(groupElem.getAttribute('number')),
          type = groupElem.getAttribute('type');
      if (type == 'stop' && lastID) {
        if (this.partGroups[lastID].type == 'start')
          delete this.partGroups[lastID].type;
        else
          this.partGroups[lastID].type = 'stop';
      }
      else {
        var symbolElem = groupElem.getElementsByTagName('group-symbol')[0],
            barlineElem = groupElem.getElementsByTagName('group-barline')[0];
        partGroup = {};
        partGroup.type = type;
        partGroup.number = num;
        if (symbolElem) partGroup.symbol = symbolElem.textContent;
        if (barlineElem) partGroup.symbol = barlineElem.textContent;
      }
    }
  }
  var partElems = this.documentElement.getElementsByTagName('part');
  for (var i = 0; i < partElems.length; i++) {
    var partElem = partElems[i];
    var id = partElem.getAttribute('id');
    if (! id) continue;
    this.parts[id] = new Vex.ML.Part(partElem);

    // Find index of this ID
    for (var j = 0; j < this.partIDs.length; j++)
      if (this.partIDs[j] == id) {
        this.partStaves[j] = this.getPart(id).getNumberOfStaves();
        break;
      }
  }
}

Vex.ML.Document.prototype.serialize = function() {
  var serializer = new XMLSerializer();
  return serializer.serializeToString(this.doc);
}

Vex.ML.Document.prototype.getPartIDs = function() {
  return this.partIDs;
}

Vex.ML.Document.prototype.getPart = function(partNum) {
  var partIDs = this.getPartIDs();
  var id;
  if (typeof partNum == 'number') {
    id = partIDs[partNum]; }
  else {
    id = partNum; }
  if (! (id in this.parts))
    return undefined;
  return this.parts[id];
}

Vex.ML.Document.prototype.getTotalStaves = function() {
  var totalStaves = 0;
  var partIDs = this.getPartIDs();
  for (var i = 0; i < partIDs.length; i++) {
    totalStaves += this.partStaves[i];
  }
  return totalStaves;
}
