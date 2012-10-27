if (! Vex.Flow.Test.MusicXML)
  Vex.Flow.Test.MusicXML = {};

Vex.Flow.Test.MusicXML.Start = function() {
  module('Basic Document');
  test('Simple Document Read', Vex.Flow.Test.MusicXML.simpleTest);
  Vex.Flow.Test.runTest('Simple Document Draw', Vex.Flow.Test.MusicXML.measureDrawTest);
  module('Sample Documents');
  Vex.Flow.Test.runTest('Sample Test (1)', Vex.Flow.Test.MusicXML.sample2PartStaffSystem);
  Vex.Flow.Test.runTest('Sample Test (2)', Vex.Flow.Test.MusicXML.sampleBachStaffSystem);
}

Vex.Flow.Test.MusicXML.simpleTest = function() {
  expect(7);
  var doc = new Vex.Flow.MusicXML.Document('<score-partwise />');
  if (doc.documentElement.nodeName != 'score-partwise') {
    ok(false, 'empty document failed:' + doc.documentElement);
    return;
  }
  ok(true, 'empty document passed');
  var docString = Vex.Flow.Test.MusicXML.Examples.Hello_World;
  doc = new Vex.Flow.MusicXML.Document(docString);
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

Vex.Flow.Test.MusicXML.measureDrawTest = function(options, contextBuilder) {
  var doc = new Vex.Flow.MusicXML.Document(Vex.Flow.Test.MusicXML.Examples.Hello_World);
  var ctx = new contextBuilder(options.canvas_sel, 500, 150);
  ctx.scale(0.9, 0.9); ctx.setFillStyle('#221'); ctx.setStrokeStyle('#221');
  var stave = new Vex.Flow.Stave(10, 10, 520);
  stave.setContext(ctx);
  stave.draw();
  doc.getPart(0).engraveMeasuresOnStaves(1, 1, stave, ctx);
  ok(true, 'Measure Drawn');
}

Vex.Flow.Test.MusicXML.sample2PartStaffSystem = function(options, contextBuilder) {
  expect(6);
  var doc = new Vex.Flow.MusicXML.Document(Vex.Flow.Test.MusicXML.Examples.Apres_Un_Reve);
  ok(doc && doc instanceof Vex.Flow.MusicXML.Document, 'doc initialized');
  var partIDs = doc.getPartIDs();
  ok(partIDs.length == 2, 'doc has correct number of parts');
  var part2 = doc.getPart(partIDs[1]);
  ok(part2.getNumberOfMeasures() == 4, 'doc has correct number of measures');
  ok(part2.getNumberOfStaves() == 2, 'part has correct number of staffs');
  ok(doc.getTotalStaves() == 3, 'doc has correct number of staves');
  var staffSystem = new Vex.Flow.MusicXML.StaffSystem(doc, {x:20,y:0,width:1100});
  var ctx = new contextBuilder(options.canvas_sel, 680, 200);
  ctx.scale(0.6, 0.6); ctx.setFillStyle('#221'); ctx.setStrokeStyle('#221');
  staffSystem.draw(ctx);
  staffSystem.drawContents(ctx);
  ok(true, 'Staff System Drawn');
};

Vex.Flow.Test.MusicXML.sampleBachStaffSystem = function(options, contextBuilder) {
  expect(2);
  var doc = new Vex.Flow.MusicXML.Document(Vex.Flow.Test.MusicXML.Examples.Prelude_C_Major);
  ok(doc && doc instanceof Vex.Flow.MusicXML.Document, 'doc initialized');
  var staffSystem = new Vex.Flow.MusicXML.StaffSystem(doc, {x:20,y:0,width:1000});
  var ctx = new contextBuilder(options.canvas_sel, 680, 120);
  ctx.scale(0.6, 0.6); ctx.setFillStyle('#221'); ctx.setStrokeStyle('#221');
  staffSystem.draw(ctx);
  staffSystem.drawContents(ctx);
  ok(true, 'Staff System Drawn');
}
