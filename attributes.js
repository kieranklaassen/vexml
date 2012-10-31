// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Attributes - Represents an <attributes> element contained by a Measure, which
// may also inherit some attributes (e.g. clef, time, key signature) from a
// previous <attributes> element.

Vex.ML.Attributes = function(element, options) {
  if (arguments.length > 0) {
    if (this.init(element, options))
      return;
    else
      return undefined;
  }
}

// Inherits from Vex.ML.Element
Vex.ML.Attributes.prototype = new Vex.ML.Element();
Vex.ML.Attributes.superclass = Vex.ML.Element;
Vex.ML.Attributes.constructor = Vex.ML.Part;
Vex.ML.Attributes.prototype.nodeName = 'attributes';

Vex.ML.Attributes.prototype.addAttribute = function(attr, attrTag, attrFunction) {
  var elements = this.element.getElementsByTagName(attrTag);
  if (elements.length == 1)
    this.attributes[attr] = attrFunction(elements[0]);
  else if (elements.length == 0 && ! (attr in this.attributes))
    this.attributes[attr] = null;
  else if (elements.length > 1) {
    this.attributes[attr] = new Array();
    for (var i = 0; i < elements.length; i++) {
      var num = parseInt(elements[i].getAttribute('number'));
      if (isNaN(num)) continue;
      this.attributes[attr][num] = attrFunction(elements[i]);
    }
  }
}
Vex.ML.Attributes.prototype.init = function(element, options) {
  if (element == undefined) {
    if (! 'previous_attribute' in options) return undefined;
    // Don't use Element's init method
    this.options = {};
    Vex.Merge(this.options, options);
  }
  else if (element.tagName == 'attributes') {
    // Use attributes element directly
    this.constructor.prototype.init.call(this, element, options);
  }
  else {
    // Assume element is a measure
    var attributesElems = element.getElementsByTagName('attributes');
    if (! attributesElems.length) return undefined;
  
    this.constructor.prototype.init.call(this, attributesElems[0], options);
  }

  this.attributes = {};
  this.new_attributes = new Array(); // Attributes that are actually present
  if ('previous_attributes' in this.options &&
      this.options.previous_attributes instanceof Vex.ML.Attributes)
    Vex.Merge(this.attributes, this.options.previous_attributes.attributes);

  this.addAttribute('clef', 'clef', Vex.ML.Attributes.Clef);
  this.addAttribute('time', 'time', Vex.ML.Attributes.Time);
  /*var clefs = this.element.getElementsByTagName('clef');
  if (clefs.length == 1) {
    this.attributes.clef = Vex.ML.Attributes.Clef(clefs[0]);
  }
  else if (clefs.length > 1) {
    if (! ('clef' in this.attributes) || typeof(this.attributes.clef) == 'string')
      this.attributes.clef = new Array();
    for (var i = 0; i < clefs.length; i++) {
      if (! clefs[i].getAttribute('number')
          || isNaN(parseInt(clefs[i].getAttribute('number'))))
        continue;
      this.attributes.clef[parseInt(clefs[i].getAttribute('number'))] =
        Vex.ML.Attributes.Clef(clefs[i]);
    }
  }
  if (clefs.length) this.new_attributes.push('clef');*/

  return this;
}

Vex.ML.Attributes.createFromPrevious = function(previousAttributes) {
  // Create an empty <attributes> tag
  // Get the MusicXML document from the previousAttributes object
  if (! previousAttributes || ! ('element' in previousAttributes) ||
      ! previousAttributes.element.ownerDocument)
    return undefined;
  var mxl_doc = previousAttributes.element.ownerDocument;
  if (! mxl_doc) return undefined;
  var empty_elem = mxl_doc.createElement('attributes');
  return new Vex.ML.Attributes(empty_elem, {
    previous_attributes: previousAttributes
  });
}

Vex.ML.Attributes.prototype.getAttributes = function() {
  var attributes = {};
  Vex.Merge(attributes, this.attributes);
  return attributes;
}

Vex.ML.Attributes.prototype.getClef = function() {
  if ('clef' in this.attributes)
    return this.attributes.clef;
  else
    return undefined;
}

// Return a list of VexFlow stave modifiers
// (Must have been created from a Measure derived from a PartStaff)
Vex.ML.Attributes.prototype.getStaveModifiers = function(opts) {
  var options = {};
  Vex.Merge(options, opts);
  var modifiers = new Array();
  if (options['line_start']) {
    if (this.getClef()) modifiers.push(new Vex.Flow.Clef(this.getClef()));
    if (this.attributes.key)
      modifiers.push(new Vex.Flow.KeySignature(this.attributes.key.pitch));
  }
  if (options['start_measure']) {
    if (this.attributes.time)
      modifiers.push(new Vex.Flow.TimeSignature(this.attributes.time.symbol));
  }
  return modifiers;
}

Vex.ML.Attributes.Clef = function(clefElem) {
  if (clefElem) {
    var signElem = clefElem.getElementsByTagName('sign')[0],
        lineElem = clefElem.getElementsByTagName('line')[0],
        clefType;
    if (signElem && lineElem)
      clefType = signElem.textContent + lineElem.textContent;
    switch (clefType) {
      case 'G2':
        return 'treble';
        break;
      case 'F4':
        return 'bass';
        break;
    }
  }
  return undefined;
}

Vex.ML.Attributes.Key = function(keyElem) {
  if (keyElem) {
    var value = {};
    var fifthsElem = keyElem.getElementsByTagName('fifths')[0];
    if (! fifthsElem) return undefined;
    value.fifths = parseInt(fifthsElem.textContent);
    if (isNaN(value.fifths)) return undefined;
    // Equivalent key, assuming major scale
    switch (value.fifths) {
      case 0: value.pitch = 'C'; break;
      case 1: value.pitch = 'G'; break;
      case 2: value.pitch = 'D'; break;
      case 3: value.pitch = 'A'; break;
      case 4: value.pitch = 'E'; break;
      case 5: value.pitch = 'B'; break;
      case 6: value.pitch = 'F#'; break;
      case 7: value.pitch = 'C#'; break;
      case -1: value.pitch = 'F'; break;
      case -2: value.pitch = 'Bb'; break;
      case -3: value.pitch = 'Eb'; break;
      case -4: value.pitch = 'Ab'; break;
      case -5: value.pitch = 'Db'; break;
      case -6: value.pitch = 'Gb'; break;
      case -7: value.pitch = 'Cb'; break;
    }
    return value;
  }
}

Vex.ML.Attributes.Time = function(timeElem) {
  if (timeElem) {
    var value = {};
    var beatsElem = timeElem.getElementsByTagName('beats')[0],
        beatTypeElem = timeElem.getElementsByTagName('beat-type')[0];
    if (! beatsElem || ! beatTypeElem) return undefined;
    var beats = parseInt(beatsElem.textContent),
        beatType = parseInt(beatTypeElem.textContent);
    if (isNaN(beats) || isNaN(beatType)) return undefined;
    value.num_beats = beats;
    value.beat_value = beatType;
    var symbol = timeElem.getAttribute('symbol');
    switch (symbol) {
      case 'common':
        value.symbol = 'C';
        break;
      case 'cut':
        value.symbol = 'C|';
        break;
    }
    if (! ('symbol' in value)) {
      value.symbol = beats.toString() + '/' + beatType.toString();
    }
    return value;
  }
  return undefined;
}
