if (! Vex.Flow.Test.VeXML)
  Vex.Flow.Test.VeXML = {};

Vex.Flow.Test.VeXML.Start = function() {
  module('Basic Document');
  test('Simple Document Read', Vex.Flow.Test.VeXML.simpleTest);
  Vex.Flow.Test.runTest('Simple Document Draw', Vex.Flow.Test.VeXML.measureDrawTest);
  module('Sample Document');
  Vex.Flow.Test.runTest('Draw 2-Part Staff System', Vex.Flow.Test.VeXML.sample2PartStaffSystem);
}

Vex.Flow.Test.VeXML.simpleTest = function() {
  expect(7);
  var doc = new Vex.Flow.VeXML.Document('<score-partwise />');
  if (doc.documentElement.nodeName != 'score-partwise') {
    ok(false, 'empty document failed:' + doc.documentElement);
    return;
  }
  ok(true, 'empty document passed');
  var docString = Vex.Flow.Test.VeXML.Examples.Hello_World;
  doc = new Vex.Flow.VeXML.Document(docString);
  ok(true, 'simple document passed');
  var partIDs = doc.getPartIDs();
  if (partIDs.length != 1) {
    ok(false, 'part id count failed')
    return;
  }
  ok(true, 'part id count passed');
  var part = doc.getPart(0);
  ok(part, 'part object passed');
  var measure = part.getMeasure(1);
  ok(measure, 'measure object passed');
  var notes = measure.getNotes();
  ok(notes.length == 1, 'notes count passed');
  ok(notes[0].pitch == 'c/4', 'note pitch passed');
};

Vex.Flow.Test.VeXML.measureDrawTest = function(options, contextBuilder) {
  var doc = new Vex.Flow.VeXML.Document(Vex.Flow.Test.VeXML.Examples.Hello_World);
  var ctx = new contextBuilder(options.canvas_sel, 500, 150);
  ctx.scale(0.9, 0.9); ctx.setFillStyle('#221'); ctx.setStrokeStyle('#221');
  var stave = new Vex.Flow.Stave(10, 10, 520);
  stave.setContext(ctx);
  stave.draw();
  doc.getPart(0).engraveMeasuresOnStaves(1, 1, stave, ctx);
  ok(true, 'Measure Drawn');
}

Vex.Flow.Test.VeXML.sample2PartStaffSystem = function(options, contextBuilder) {
  expect(6);
  var doc = new Vex.Flow.VeXML.Document(Vex.Flow.Test.VeXML.Examples.Apres_Un_Reve);
  ok(doc && doc instanceof Vex.Flow.VeXML.Document, 'doc initialized');
  var partIDs = doc.getPartIDs();
  ok(partIDs.length == 2, 'doc has correct number of parts');
  var part2 = doc.getPart(partIDs[1]);
  ok(part2.getNumberOfMeasures() == 4, 'doc has correct number of measures');
  ok(part2.getNumberOfStaves() == 2, 'part has correct number of staffs');
  ok(doc.getTotalStaves() == 3, 'doc has correct number of staves');
  var staffSystem = new Vex.Flow.VeXML.StaffSystem(doc, {x:20,y:0,width:520});
  var ctx = new contextBuilder(options.canvas_sel, 500, 300);
  ctx.scale(0.9, 0.9); ctx.setFillStyle('#221'); ctx.setStrokeStyle('#221');
  staffSystem.draw(ctx);
  staffSystem.drawContents(ctx);
  ok(true, 'Staff System Drawn');
};
