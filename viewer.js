// VeXML
// Copyright (c) 2012 Daniel Ringwalt
//
// Viewer - Simple multi-line music viewer using VexFlow
// Requires VexFlow, JQuery. See viewer.html

// Wraps a StaffSystem that draws in a particular <canvas> element
Vex.Flow.MusicXML.CanvasViewer = function(doc, staffsystem_options) {
  staffsystem_options.x = 20;
  staffsystem_options.y = 50;
  staffsystem_options.width = 600;
  this.staffSystem = new Vex.Flow.MusicXML.StaffSystem(doc, staffsystem_options);
  this.viewportWidth = 800;
  this.zoom = 0.8;
}

// Takes a <div> element and MusicXML.Document and displays the document
Vex.Flow.MusicXML.Viewer = function(element, doc) {
  if (arguments.length > 0) this.init(element, doc);
};
Vex.ML.Viewer.prototype.init = function(element, doc) {
  this.element = element;
  this.doc = doc;
  this.canvasViewers = new Array();
  this.viewportWidth = 800;
  this.zoom = 0.8;

  this.layout();
};
Vex.ML.Viewer.prototype.addStaffSystem = function(canvas_options, music_options) {
  var canvas = document.createElement('canvas');
  canvas.setAttribute('width', canvas_options.width);
  canvas.setAttribute('height', canvas_options.height);
  var staffSystem = new Vex.Flow.MusicXML.StaffSystem(this.doc, music_options);
  this.element.appendChild(canvas);
  var context = canvas.getContext('2d');
  context.scale(this.zoom, this.zoom);
  staffSystem.draw(context);
  staffSystem.drawContents(context);
  return staffSystem;
};
Vex.ML.Viewer.prototype.layout = function() {
  this.element.innerHTML = "";
  var width = Math.floor(this.viewportWidth / this.zoom);
  var measure = 0;
  if (this.doc.getPart(0).getMeasure(0)) measure = -1; // pickup measure
  while (measure < this.doc.getPart(0).getNumberOfMeasures()) {
    measure++;
    var staffSystem = this.addStaffSystem({width:width,height:180},
      {start_measure:measure, x:20, y:10, width:Math.floor((width-40)/this.zoom)}
      );
    measure = staffSystem.end_measure;
  }
}

