if (!Vex.Flow.Test) Vex.Flow.Test = {};

Vex.Flow.Test.VeXML = {};

Vex.Flow.Test.VeXML.Start = function() {
  module("VeXML Reading MusicXML");
  test("Document String Test", Vex.Flow.Test.VeXML.docString);
}

Vex.Flow.Test.VeXML.docString = function() {
  expect(5);
  var doc = new Vex.Flow.VeXML.Document("<score-partwise />");
  if (doc.documentElement.nodeName != 'score-partwise') {
    ok(false, "empty document failed:" + doc.documentElement);
    return;
  }
  ok(true, "empty document passed");
  var docString = '\
<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
<!DOCTYPE score-partwise PUBLIC\
    "-//Recordare//DTD MusicXML 3.0 Partwise//EN"\
    "http://www.musicxml.org/dtds/partwise.dtd">\
<score-partwise version="3.0">\
  <part-list>\
    <score-part id="P1">\
      <part-name>Music</part-name>\
    </score-part>\
  </part-list>\
  <part id="P1">\
    <measure number="1">\
      <attributes>\
        <divisions>1</divisions>\
        <key>\
          <fifths>0</fifths>\
        </key>\
        <time>\
          <beats>4</beats>\
          <beat-type>4</beat-type>\
        </time>\
        <clef>\
          <sign>G</sign>\
          <line>2</line>\
        </clef>\
      </attributes>\
      <note>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>4</duration>\
        <type>whole</type>\
      </note>\
    </measure>\
  </part>\
</score-partwise>';
  doc = new Vex.Flow.VeXML.Document(docString);
  ok(true, 'simple document passed');
  var partIDs = doc.getPartIDs();
  if (partIDs.length != 1) {
    ok(false, 'part id count failed')
    return;
  }
  ok(true, 'part id count passed');
  var part = doc.getPart(0);
  if (part)
    ok(true, 'part object passed');
  else
    ok(false, 'part object failed');
  var measure = part.getMeasure(1);
  if (measure)
    ok(true, 'measure object passed');
  else
    ok(false, 'measure object failed');
}
