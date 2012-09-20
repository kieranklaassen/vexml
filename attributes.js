// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Attributes - Represents an <attributes> element contained by a Measure, which
// may also inherit some attributes (e.g. clef, time, key signature) from a
// previous <attributes> element.

Vex.ML.Attributes = function(element, options) {
  if (arguments.length > 0) this.init(element, options);
}

// Inherits from Vex.ML.Element
Vex.ML.Attributes.prototype = new Vex.ML.Element();
Vex.ML.Attributes.superclass = Vex.ML.Element;
Vex.ML.Attributes.constructor = Vex.ML.Part;
Vex.ML.Attributes.prototype.nodeName = 'attributes';

Vex.ML.Attributes.prototype.init = function(element, options) {
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
