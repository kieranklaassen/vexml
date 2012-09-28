// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// StaffSystem - Draws all of the staffs on one line (a system.)

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
    startMeasure: 1,
    inter_staff_space: 0 // Stave includes padding
  };
  Vex.Merge(this.options, options);
  if (! this.options.numberOfStaves)
    this.options.numberOfStaves = doc.getTotalStaves();
  this.startMeasure = this.options.startMeasure;
  this.document = doc;
  this.staves = new Array();
  this.staveHeight = (new Vex.Flow.Stave(0,0,100)).getHeight();
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
  // Create staves with a dummy width and the correct modifiers
  var modifierArray = new Array();
  var numStaves = this.document.getTotalStaves();
  for (var i = 0; i < numStaves; i++) {
    //var stave = new Vex.Flow.Stave(0, 0, 500);
    var partStaffNum = this.partStaffForStaffNum(i);
    var partStaff = this.document.getPart(partStaffNum[0]).getStaff(partStaffNum[1]+1);
    var measure = partStaff.getMeasure(measureNum);
    var modifiers = measure.getStaveModifiers({line_start: (measureNum == this.startMeasure)});
    modifierArray.push(modifiers);
  }
  return modifierArray;
}

Vex.ML.StaffSystem.prototype.getEndMeasure = function() {
  if (this.endMeasure) return this.endMeasure;
  
  // TODO: Actually calculate how many measures can fit based on the width.
  this.endMeasure = this.startMeasure + 3;
  return this.endMeasure;
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

  var measureWidths = new Array(), totalWidth = 0;
  this.getEndMeasure();
  // TODO: Actually come up with a good measure width
  for (var i = 0; i <= this.endMeasure - this.startMeasure; i++) {
    measureWidths[i] = Math.floor(this.width / (this.endMeasure - this.startMeasure + 1));
    totalWidth += measureWidths[i];
  }
  // Add remainder to the first measure
  measureWidths[0] += this.width - totalWidth;
  
  var origin = this.x;
  for (var i = 0; i <= this.endMeasure - this.startMeasure; i++) {
    // Array of Staves for each staff
    this.staves[i] = new Array();
    var measureModifiers = this.getModifierArray(i+this.startMeasure);
    for (var j = 0; j < this.options.numberOfStaves; j++) {
      var yOrigin = j * (this.staveHeight + this.options.inter_staff_space);
      this.staves[i][j] = new Vex.Flow.Stave(origin, yOrigin, measureWidths[i]);
      // Get Measure to find clef
      var staffMeasure = this.getPartStaff(j).getMeasure(i+this.startMeasure);
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


  this.getEndMeasure();
}

Vex.ML.StaffSystem.prototype.drawContents = function(context) {
  var partIDs = this.document.getPartIDs(),
      startStave = 0;
  for (var i = 0; i < partIDs.length; i++) {
    var part = this.document.getPart(i);
    var partStaves = new Array();
    var numStaves = part.getNumberOfStaves();
    for (var j = 0; j < this.staves.length; j++) {
      partStaves.push(new Array());
      for (var k = startStave; k < startStave + numStaves; k++)
        partStaves[partStaves.length-1].push(this.staves[j][k]);
    }
    part.engraveMeasuresOnStaves(1,3, partStaves, context);
    startStave += numStaves;
  }
  //this.document.getPart(1).engraveMeasuresOnStaves(1,3,this.getStaves(),context);
}
