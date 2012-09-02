if (! Vex.Flow.Test.VeXML)
  Vex.Flow.Test.VeXML = {};

Vex.Flow.Test.VeXML.Start = function() {
  module("VeXML Reading MusicXML");
  test("Simple Document Test", Vex.Flow.Test.VeXML.simpleTest);
  test("Sample 2-Part With Lyrics", Vex.Flow.Test.VeXML.sample2PartLyricsTest);
}

Vex.Flow.Test.VeXML.simpleTest = function() {
  expect(7);
  var doc = new Vex.Flow.VeXML.Document("<score-partwise />");
  if (doc.documentElement.nodeName != 'score-partwise') {
    ok(false, "empty document failed:" + doc.documentElement);
    return;
  }
  ok(true, "empty document passed");
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

Vex.Flow.Test.VeXML.sample2PartLyricsTest = function() {
  expect(2);
  var doc = new Vex.Flow.VeXML.Document(Vex.Flow.Test.VeXML.Examples.Apres_Un_Reve);
  ok(doc && doc instanceof Vex.Flow.VeXML.Document, "doc created");
  ok(true, 'hi');
};
