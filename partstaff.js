// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// PartStaff - Represents a set of notes drawn on the same staff, which may span
// multiple Measures and/or Voices. May be created from an entire Part or just
// a single Measure of a Part.

Vex.ML.PartStaff = function(parentElement, options) {
  if (arguments.length > 0) this.init(parentElement, options);
}

Vex.ML.PartStaff.prototype.init = function(parentElement, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (! this.options.staff_num)
    throw new Error('VeXML.PartStaff requires a staff_num');
  this.parentElement = parentElement;

  this.attributes = new Array();

  this.measures = new Array();

  if ('clef' in this.options)
    this.clef = this.options.clef;
  else if (this.getAttributes(1).getClef())
    this.clef = this.getAttributes(1).getClef();
  else
    this.clef = undefined;
}

Vex.ML.PartStaff.prototype.getAttributes = function(measureNum) {
  if (measureNum in this.attributes)
    return this.attributes[measureNum];

  var attributes = this.parentElement.getAttributes(measureNum);
  // Replace attributes with multiple staves with the attribute for this staff
  var newAttrs = new Object();
  var new_new_attributes = new Array();
  for (var attr in attributes.attributes) {
    if (attributes.attributes[attr] instanceof Array) {
      if (this.options.staff_num in attributes.attributes[attr])
        newAttrs[attr] = attributes.attributes[attr][this.options.staff_num];
    }
    else {
      newAttrs[attr] = attributes.attributes[attr];
    }
  }
  // Add attributes from new_attributes that are in newAttrs
  for (var i = 0; i < attributes.new_attributes.length; i++) {
    var attr = attributes.new_attributes[i];
    if (attr in newAttrs)
      new_new_attributes.push(attr);
  }

  var attrsObject = Vex.ML.Attributes.createFromPrevious(attributes);
  attrsObject.attributes = newAttrs;
  attrsObject.new_attributes = new_new_attributes;
  this.attributes[measureNum] = attrsObject;
  return attrsObject;
}

Vex.ML.PartStaff.prototype.getMeasure = function(measureNum, options) {
  // Check for cached measure
  if (measureNum in this.measures)
    return this.measures[measureNum];

  var measureOptions = {};
  if (this.getAttributes(measureNum).getClef())
    measureOptions.clef = this.getAttributes(measureNum).getClef();
  Vex.Merge(measureOptions, options);
  var origMeasure = this.parentElement.getMeasure(measureNum, measureOptions);
  var clone = origMeasure.element.cloneNode(false);
  // Need to add child node objects from original
  var childNodes = origMeasure.element.childNodes;

  // True if a chord has to be split across multiple staffs
  var newChord = false;
  for (var i = 0; i < childNodes.length; i++) {
    var node = childNodes[i];
    if (node.tagName == 'note' || node.tagName == 'direction') {
      // Look for "staff" element matching this staff
      var staff = node.getElementsByTagName('staff')[0];
      if (! staff) continue;
      if (parseInt(staff.textContent) != this.options.staff_num) {
        // If this is a note, we need to remove the next chord element
        // on a note on the current staff (if there is one).
        if (node.tagName == 'note' &&
            node.getElementsByTagName('chord').length == 1)
          newChord = true;
        continue;
      }
      var newNode = node.cloneNode(true);
      // Split chords across multiple staffs
      if (newNode.tagName == 'note') {
        if (newChord) {
          var chord = newNode.getElementsByTagName('chord')[0];
          if (chord) newNode.removeChild(chord);
        }
        // We don't need to split the next note in a chord
        newChord = false;
      }
      clone.appendChild(newNode);
    }
    else if (node.tagName == 'attributes') {
      // Remove any elements that are for another staff
      var attrElem = node.cloneNode(false);
      var attrNodes = node.childNodes;
      for (var j = 0; j < attrNodes.length; j++) {
        var attrNode = attrNodes[j];
        if (attrNode.getAttribute && attrNode.getAttribute('number') &&
            parseInt(attrNode.getAttribute('number')) != this.options.staff_num)
          continue;
        attrElem.appendChild(attrNode.cloneNode(true));
      }
      clone.appendChild(attrElem);
    }
    else if (node.tagName == 'print') {
      // Remove staff-layout elements that are for another staff
      var printElem = node.cloneNode(false);
      var printNodes = node.childNodes;
      for (var j = 0; j < printNodes.length; j++) {
        var printNode = printNodes[j];
        if (printNode.tagName == 'staff-layout' &&
            parseInt(printNode.getAttribute('number')) != measureNum)
          continue;
        printElem.appendChild(printNode.cloneNode(true));
      }
      clone.appendChild(printElem);
    }
  }
  var measureOptions = {clef: this.clef};
  Vex.Merge(measureOptions, options);
  var measure = new Vex.ML.Measure(clone, measureOptions);
  this.measures[measureNum] = measure;
  return measure;
}
