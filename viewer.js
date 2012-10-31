Vex.Flow.MusicXML.Viewer = function(element, doc) {
  if (arguments.length > 0) this.init(element, doc);
};
Vex.ML.Viewer.prototype.init = function(element, doc) {
  this.element = element;
  this.doc = doc;
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
  while (measure < this.doc.getPart(0).getNumberOfMeasures()) {
    measure++;
    var staffSystem = this.addStaffSystem({width:width,height:200},
      {start_measure:measure, x:20, y:0, width:Math.floor((width-40)/this.zoom)}
      );
    measure = staffSystem.end_measure;
  }
}

var VexFlow_Viewer = null;

$(document).ready(function() {
  var doc = new Vex.Flow.MusicXML.Document(Vex.Flow.Test.MusicXML.Examples.Prelude_C_Major);
  VexFlow_Viewer = new Vex.Flow.MusicXML.Viewer($('.vexml_viewer')[0], doc);
  /*VexFlow_Viewer.addStaffSystem({width:800,height:500},
  {start_measure:1, x:20, y: 0, width:700});*/
});
