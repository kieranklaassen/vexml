// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// PartStaff - Represents a set of notes drawn on the same staff, which may span
// multiple Measures and/or Voices. May be created from an entire Part or just
// a single Measure of a Part.

Vex.Flow.VeXML.PartStaff = function(parentElement, options) {
  if (arguments.length > 0) this.init(parentElement, options);
}

Vex.Flow.VeXML.PartStaff.prototype.init = function(parentElement, options) {
  this.options = {};
  Vex.Merge(this.options, options);
  if (! this.options.staff_num)
    throw new Error('VeXML.PartStaff requires a staff_num');
  this.parentElement = parentElement;

  this.clef = 'treble';
  var measure1 = this.getMeasure(1);
  if (measure1.clef)
    this.clef = measure1.clef;
  else
    this.clef = undefined;
}

Vex.Flow.VeXML.PartStaff.prototype.getMeasure = function(measureNum, options) {
  var origMeasure = this.parentElement.getMeasure(measureNum, options);
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
  return new Vex.Flow.VeXML.Measure(clone, measureOptions);
}
