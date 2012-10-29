// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// StaffSystem - Draws one line of music (a system of staffs.)

Vex.ML.StaffSystem = function(doc, options) {
  if (arguments.length > 0) this.init(doc, options);
}

Vex.ML.StaffSystem.prototype.init = function(doc, options) {
  if (typeof options.width != 'number' || typeof options.x != 'number'
      || typeof options.y != 'number') {
    throw new Error('StaffSystem needs numeric x, y, and width options'); }
  this.width = options.width;
  this.x = options.x;
  this.y = options.y;
  this.options = {
    start_measure: 1,
    inter_staff_space: 0 // Stave includes padding
  };
  Vex.Merge(this.options, options);
  if (! this.options.numberOfStaves)
    this.options.numberOfStaves = doc.getTotalStaves();
  this.start_measure = this.options.start_measure;
  if ('end_measure' in this.options && this.options.end_measure
      && this.options.end_measure >= this.start_measure)
    this.end_measure = this.options.end_measure;
  else
    this.end_measure = null;
  this.document = doc;
  this.staveHeight = (new Vex.Flow.Stave(0,0,100)).getHeight();

  // Arrays of arrays indexed by measure, then voice
  this.staves = new Array();
  this.stavesStartX = new Array();
  this.stavesEndX = new Array();
  this.voices = new Array();
  this.vexflowVoices = new Array();
  this.voiceStaves = new Array(); // Map voice at index to index of a stave

  // Flat arrays for each measure
  this.formatters = new Array();
  this.minWidths = new Array();
  this.minActualWidths = new Array(); // Actual width when formatting to min width
  this.additionalWidths = new Array(); // Additional width of measure from modifiers
}

// Get part and staff number within part as an array
// Part and staff numbers are zero-indexed
Vex.ML.StaffSystem.prototype.partStaffForStaffNum = function(staffNum) {
  var stavesBefore = 0;
  var partIDs = this.document.getPartIDs();
  for (var i = 0; i < partIDs.length; i++) {
    var part = this.document.getPart(i);
    var numPartStaves = part.getNumberOfStaves();
    if (stavesBefore + numPartStaves > staffNum) {
      return [i, staffNum - stavesBefore];
    }
    stavesBefore += numPartStaves;
  }
}

// Return PartStaff object corresponding to the staff
Vex.ML.StaffSystem.prototype.getPartStaff = function(staffNum) {
  var partStaffNum = this.partStaffForStaffNum(staffNum);
  var part = this.document.getPart(partStaffNum[0]);
  if (! part) return undefined;
  var staff = part.getStaff(partStaffNum[1]+1);
  return staff;
}

Vex.ML.StaffSystem.prototype.getModifierArray = function(measureNum) {
  var modifierArray = new Array();
  var numStaves = this.document.getTotalStaves();
  for (var i = 0; i < numStaves; i++) {
    var partStaffNum = this.partStaffForStaffNum(i);
    var partStaff = this.document.getPart(partStaffNum[0]).getStaff(partStaffNum[1]+1);
    var measure = partStaff.getMeasure(measureNum);
    var modifiers = measure.getStaveModifiers({line_start: (measureNum == this.start_measure)});
    modifierArray.push(modifiers);
  }
  return modifierArray;
}

// Creates and formats the voices in each measure to the full width, until no more
// measures can fit (determined by their minWidth.)
// Required to determine end_measure if it was not specified.
Vex.ML.StaffSystem.prototype.createVoicesAndFormatters = function() {
  var lastMeasure = this.document.getPart(0).getNumberOfMeasures();
  if (this.end_measure && this.end_measure >= this.start_measure)
    lastMeasure = this.end_measure;
      
  var partIDs = this.document.getPartIDs();
  var totalMinWidth = 0;
  for (var i = 0; i < lastMeasure - this.start_measure; i++) {
    if (! (i in this.voices)) {
      this.voices[i] = new Array();
      this.vexflowVoices[i] = new Array();
      this.voiceStaves[i] = new Array();
      this.stavesStartX[i] = new Array();
      this.stavesEndX[i] = new Array();
    }
    
    var startStave = 0;
    var totalStaves = 0;
    for (var j = 0; j < partIDs.length; j++) {
      var part = this.document.getPart(j),
          numStaves = part.getNumberOfStaves();
      for (var stave = startStave; stave < startStave + numStaves; stave++) {
        var partStaff = part.getStaff(stave + 1 - startStave);
        var staffMeasure = partStaff.getMeasure(this.options.start_measure + i);
        var voiceNums = staffMeasure.getVoiceNumbers();
        for (var k = 0; k < voiceNums.length; k++) {
          var voice = staffMeasure.getVoice(voiceNums[k]);
          this.voices[i].push(voice);
          this.vexflowVoices[i].push(voice.createVexflowVoice());
          this.voiceStaves[i].push(stave);
        }
      }
      startStave += numStaves;
      totalStaves += numStaves;
    }

    // Create dummy staves for formatting to calculate min width
    var dummyStaves = new Array();
    var modifiers = this.getModifierArray(this.start_measure + i);
    for (var staveNum = 0; staveNum < totalStaves; staveNum++) {
      dummyStaves[staveNum] = new Vex.Flow.Stave(0, staveNum*100, this.width);
      for (var modifier = 0; modifier < modifiers[staveNum].length; modifier++)
        dummyStaves[staveNum].addModifier(modifiers[staveNum][modifier]);
      this.stavesStartX[i][staveNum] = dummyStaves[staveNum].getNoteStartX();
      this.stavesEndX[i][staveNum] = dummyStaves[staveNum].getNoteEndX();
    }
    var noteWidth = this.stavesEndX[i][0] - this.stavesStartX[i][0];
    for (var staveNum = 1; staveNum < totalStaves; staveNum++)
      if (noteWidth > this.stavesEndX[i][staveNum] - this.stavesStartX[i][staveNum])
          noteWidth = this.stavesEndX[i][staveNum] - this.stavesStartX[i][staveNum];
    this.additionalWidths[i] = this.width - noteWidth;
    
    for (var v = 0; v < this.voices[i].length; v++) {
      var vexmlVoice = this.voices[i][v];
      vexmlVoice.setVexflowStave(dummyStaves[this.voiceStaves[i][v]]);
    }
    this.formatters[i] = new Vex.Flow.Formatter().joinVoices(this.vexflowVoices[i]);
    this.formatters[i].format(this.vexflowVoices[i], noteWidth);

    // Re-format to min width
    this.minWidths[i] = this.formatters[i].getMinTotalWidth();
    this.formatters[i].format(this.vexflowVoices[i], this.minWidths[i]);
    // Find x of farthest right tickable from each voice
    var maxX = 0;
    for (var v = 0; v < this.vexflowVoices[i].length; v++) {
      var tickables = this.vexflowVoices[i][v].tickables;
      var x = tickables[tickables.length - 1].getX();
      if (x > maxX) maxX = x;
    }
    maxX += 30;
    this.minActualWidths[i] = maxX;

    var measureWidth = maxX + this.additionalWidths[i];
    if (measureWidth + totalMinWidth > this.width) {
      this.voices.splice(i-1, 1);
      this.vexflowVoices.splice(i-1, 1);
      this.voiceStaves.splice(i-1, 1);
      if (!this.end_measure) this.end_measure = this.start_measure;
      break;
    }
    else {
      totalMinWidth += measureWidth;
      this.end_measure = this.start_measure + i;
    }
  }
}

Vex.ML.StaffSystem.prototype.getEndMeasure = function() {
  if (this.end_measure && this.end_measure >= this.start_measure)
    return this.end_measure;
  
  this.createVoicesAndFormatters();
  return this.end_measure;
}

Vex.ML.StaffSystem.prototype.createStaves = function() {
  this.staves = new Array();
  // Indices of staves whose barlines should be connect to the staff below
  this.connectedBarlines = new Array();
  this.connectors = new Array();
  var partIDs = this.document.getPartIDs();
  var parts = new Array();
  var stavesAbove = 0;
  for (var i = 0; i < partIDs.length; i++) {
    parts[i] = this.document.getPart(i);
    var numStaves = parts[i].getNumberOfStaves();
    for (var j = 0; j < numStaves - 1; j++) {
      this.connectedBarlines.push(stavesAbove + j);
    }
    if (numStaves > 1)
      this.connectors.push({
        top_stave: stavesAbove,
        bottom_stave: stavesAbove + numStaves - 1,
        type: Vex.Flow.StaveConnector.type.BRACE,
      });
    stavesAbove += numStaves;
  }

  this.getEndMeasure();
  var measureWidths = new Array(), totalWidth = 0;
  for (var i = 0; i < this.voices.length; i++) {
    // Add the width of any modifiers and the minimum width to each measure
    measureWidths[i] = Math.ceil(this.additionalWidths[i] + this.minActualWidths[i]);
    totalWidth += measureWidths[i];
  }
  // Divide the rest evenly
  if (this.width > totalWidth) {
    var addedWidth = Math.floor((this.width - totalWidth) / measureWidths.length);
    for (var i = 0; i < measureWidths.length; i++)
      measureWidths[i] += addedWidth;
    totalWidth += measureWidths.length * addedWidth;
    // Add remainder to the first measure
    measureWidths[0] += this.width - totalWidth;
  }
  // What should we do if the total width is already more than it should be?
  
  var origin = this.x;
  for (var i = 0; i <= this.end_measure - this.start_measure; i++) {
    // Array of Staves for each staff
    this.staves[i] = new Array();
    var measureModifiers = this.getModifierArray(i+this.start_measure);
    for (var j = 0; j < this.options.numberOfStaves; j++) {
      var yOrigin = j * (this.staveHeight + this.options.inter_staff_space);
      this.staves[i][j] = new Vex.Flow.Stave(origin, yOrigin, measureWidths[i]);
      // Get Measure to find clef
      var staffMeasure = this.getPartStaff(j).getMeasure(i+this.start_measure);
      if (staffMeasure.clef)
        this.staves[i][j].clef = staffMeasure.clef;
      for (var k = 0; k < measureModifiers[j].length; k++)
        this.staves[i][j].addModifier(measureModifiers[j][k]);
    }
    origin += measureWidths[i];
  }
}

Vex.ML.StaffSystem.prototype.getStaves = function() {
  if (! this.staves || ! this.staves.length)
    this.createStaves();
  return this.staves;
}

Vex.ML.StaffSystem.prototype.draw = function(context) {
  if (! this.staves || ! this.staves.length)
    this.createStaves();

  for (var i = 0; i < this.staves.length; i++) {
    for (var j = 0; j < this.staves[i].length; j++) {
      this.staves[i][j].setContext(context);
      this.staves[i][j].draw(context);
      // Check this.connectedBarlines for if we need to draw the barline
      for (var k = 0; k < this.connectedBarlines.length; k++)
        if (this.connectedBarlines[k] == j) {
          var topStave, bottomStave;
          // Last measure; create dummy stave to position stave connector
          if (i + 1 == this.staves.length) {
            topStave = new Vex.Flow.Stave(this.staves[i][j].getX()
                                          + this.staves[i][j].width,
                                          this.staves[i][j].y,
                                          100);
            bottomStave = new Vex.Flow.Stave(this.staves[i][j+1].getX()
                                             + this.staves[i][j+1].width,
                                             this.staves[i][j+1].y,
                                             100);
          }
          else {
            topStave = this.staves[i+1][j];
            bottomStave = this.staves[i+1][j+1];
          }
          var connector = new Vex.Flow.StaveConnector(topStave, bottomStave);
          connector.setType(Vex.Flow.StaveConnector.type.SINGLE);
          connector.setContext(context).draw();
        }
    }
  }

  var connector = new Vex.Flow.StaveConnector(this.staves[0][0], this.staves[0][this.staves[0].length-1]);
  connector.setType(Vex.Flow.StaveConnector.type.SINGLE);
  connector.setContext(context);
  connector.draw();
  // Draw all of this.connectors
  for (var i = 0; i < this.connectors.length; i++) {
    var connInfo = this.connectors[i];
    var connector = new Vex.Flow.StaveConnector(this.staves[0][connInfo.top_stave],
                                            this.staves[0][connInfo.bottom_stave]);
    connector.setType(connInfo.type).setContext(context).draw();
  }
}

Vex.ML.StaffSystem.prototype.drawContents = function(context) {
  var partIDs = this.document.getPartIDs(),
      startStave = 0;
  for (var m = 0; m < this.staves.length; m++) {
    var voices = this.voices[m],
        vfVoices = this.vexflowVoices[m],
        staves = this.staves[m];
    for (var v = 0; v < voices.length; v++)
      voices[v].setVexflowStave(staves[this.voiceStaves[m][v]]);

    var formatter = this.formatters[m],
        staveWidth = staves[0].width,
        width;
    if (staveWidth - this.additionalWidths[m] <= this.minActualWidths[m] + 10)
      width = this.minWidths[m];
    else {
      width = staves[0].getNoteEndX() - staves[0].getNoteStartX();
      if (this.minActualWidths[m] > this.minWidths[m])
        width += this.minWidths[m] - this.minActualWidths[m];
      if (width < this.minWidths[m]) width = this.minWidths[m];
    }
    formatter.format(vfVoices, width);

    for (var v = 0; v < voices.length; v++)
      voices[v].drawVexflow(undefined, context, staves[this.voiceStaves[m][v]]);
  }
}
