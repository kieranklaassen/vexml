if (! Vex.Flow.Test.MusicXML)
  Vex.Flow.Test.MusicXML = {};
Vex.Flow.Test.MusicXML.Examples = {};

Vex.Flow.Test.MusicXML.Examples.Hello_World = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
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

Vex.Flow.Test.MusicXML.Examples.Apres_Un_Reve = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\
<score-partwise version="3.0">\
  <movement-title>Après un rêve</movement-title>\
  <identification>\
    <creator type="composer">Gabriel Fauré</creator>\
    <rights>Copyright © 2002 Recordare LLC</rights>\
    <encoding>\
      <software>Finale 2011 for Windows</software>\
      <software>Dolet 6.0 for Finale</software>\
      <encoding-date>2011-08-10</encoding-date>\
      <supports attribute="new-system" element="print" type="yes" value="yes"/>\
      <supports attribute="new-page" element="print" type="yes" value="yes"/>\
    </encoding>\
  </identification>\
  <defaults>\
    <scaling>\
      <millimeters>6.35</millimeters>\
      <tenths>40</tenths>\
    </scaling>\
    <page-layout>\
      <page-height>1760</page-height>\
      <page-width>1360</page-width>\
      <page-margins type="both">\
        <left-margin>80</left-margin>\
        <right-margin>80</right-margin>\
        <top-margin>80</top-margin>\
        <bottom-margin>80</bottom-margin>\
      </page-margins>\
    </page-layout>\
    <system-layout>\
      <system-margins>\
        <left-margin>0</left-margin>\
        <right-margin>0</right-margin>\
      </system-margins>\
      <system-distance>127</system-distance>\
      <top-system-distance>127</top-system-distance>\
    </system-layout>\
    <staff-layout>\
      <staff-distance>80</staff-distance>\
    </staff-layout>\
    <appearance>\
      <line-width type="stem">1.25</line-width>\
      <line-width type="beam">5</line-width>\
      <line-width type="staff">0.8333</line-width>\
      <line-width type="light barline">2.0833</line-width>\
      <line-width type="heavy barline">6.6667</line-width>\
      <line-width type="leger">1.25</line-width>\
      <line-width type="ending">0.7682</line-width>\
      <line-width type="wedge">0.957</line-width>\
      <line-width type="enclosure">1.6667</line-width>\
      <line-width type="tuplet bracket">1.3542</line-width>\
      <note-size type="grace">66</note-size>\
      <note-size type="cue">66</note-size>\
      <distance type="hyphen">60</distance>\
      <distance type="beam">8</distance>\
    </appearance>\
    <music-font font-family="Maestro,engraved" font-size="18"/>\
    <word-font font-family="Times New Roman" font-size="8.25"/>\
    <lyric-font font-family="Times New Roman" font-size="10"/>\
  </defaults>\
  <part-list>\
    <score-part id="P1">\
      <part-name print-object="no">Voice</part-name>\
      <score-instrument id="P1-I14">\
        <instrument-name>Choir Aahs</instrument-name>\
      </score-instrument>\
      <midi-instrument id="P1-I14">\
        <midi-channel>1</midi-channel>\
        <midi-program>53</midi-program>\
        <volume>80</volume>\
        <pan>0</pan>\
      </midi-instrument>\
    </score-part>\
    <part-group number="1" type="start">\
      <group-symbol default-x="-7">brace</group-symbol>\
      <group-barline>yes</group-barline>\
    </part-group>\
    <score-part id="P2">\
      <part-name>Piano</part-name>\
      <score-instrument id="P2-I1">\
        <instrument-name>Grand Piano</instrument-name>\
      </score-instrument>\
      <midi-instrument id="P2-I1">\
        <midi-channel>2</midi-channel>\
        <midi-program>1</midi-program>\
        <volume>80</volume>\
        <pan>0</pan>\
      </midi-instrument>\
    </score-part>\
    <part-group number="1" type="stop"/>\
  </part-list>\
  <!--=========================================================-->\
  <part id="P1">\
    <measure number="1" width="366">\
      <print>\
        <system-layout>\
          <system-margins>\
            <left-margin>3</left-margin>\
            <right-margin>0</right-margin>\
          </system-margins>\
          <top-system-distance>280</top-system-distance>\
        </system-layout>\
        <measure-numbering>system</measure-numbering>\
      </print>\
      <attributes>\
        <divisions>24</divisions>\
        <key>\
          <fifths>-3</fifths>\
          <mode>major</mode>\
        </key>\
        <time>\
          <beats>3</beats>\
          <beat-type>4</beat-type>\
        </time>\
        <clef>\
          <sign>G</sign>\
          <line>2</line>\
        </clef>\
      </attributes>\
      <direction directive="yes" placement="above">\
        <direction-type>\
          <words default-y="15" font-size="10.5" font-weight="bold">Andantino</words>\
        </direction-type>\
        <sound tempo="60"/>\
      </direction>\
      <note>\
        <rest measure="yes"/>\
        <duration>72</duration>\
        <voice>1</voice>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="2" width="245">\
      <direction placement="above">\
        <direction-type>\
          <words default-x="15" default-y="15" font-size="9" font-style="italic">dolce</words>\
        </direction-type>\
      </direction>\
      <note default-x="27">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="6">up</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>Dans</text>\
        </lyric>\
      </note>\
      <direction placement="above">\
        <direction-type>\
          <wedge default-y="20" spread="0" type="crescendo"/>\
        </direction-type>\
        <offset>-8</offset>\
      </direction>\
      <note default-x="99">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-50.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>un</text>\
        </lyric>\
      </note>\
      <note default-x="171">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-45.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>begin</syllabic>\
          <text>som</text>\
        </lyric>\
      </note>\
      <direction>\
        <direction-type>\
          <wedge spread="11" type="stop"/>\
        </direction-type>\
        <offset>-11</offset>\
      </direction>\
    </measure>\
    <!--=======================================================-->\
    <measure number="3" width="303">\
      <note default-x="26">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>5</octave>\
        </pitch>\
        <duration>24</duration>\
        <tie type="start"/>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-40.5">down</stem>\
        <notations>\
          <tied type="start"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>end</syllabic>\
          <text>meil</text>\
          <extend/>\
        </lyric>\
      </note>\
      <note default-x="92">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <tie type="stop"/>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-40">down</stem>\
        <beam number="1">begin</beam>\
        <notations>\
          <tied type="stop"/>\
          <tuplet bracket="no" number="1" placement="above" type="start"/>\
        </notations>\
      </note>\
      <note default-x="122">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-42">down</stem>\
        <beam number="1">continue</beam>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>que</text>\
        </lyric>\
      </note>\
      <note default-x="162">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-45">down</stem>\
        <beam number="1">end</beam>\
        <notations>\
          <tuplet number="1" type="stop"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>begin</syllabic>\
          <text>char</text>\
        </lyric>\
      </note>\
      <note default-x="205">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-40">down</stem>\
        <beam number="1">begin</beam>\
        <notations>\
          <tuplet bracket="no" number="1" placement="above" type="start"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>end</syllabic>\
          <text>mait</text>\
        </lyric>\
      </note>\
      <note default-x="244">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-43">down</stem>\
        <beam number="1">continue</beam>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>ton</text>\
        </lyric>\
      </note>\
      <note default-x="276">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-45">down</stem>\
        <beam number="1">end</beam>\
        <notations>\
          <tuplet number="1" type="stop"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>begin</syllabic>\
          <text>i</text>\
        </lyric>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="4" width="284">\
      <direction placement="above">\
        <direction-type>\
          <wedge default-y="20" spread="11" type="diminuendo"/>\
        </direction-type>\
        <offset>3</offset>\
      </direction>\
      <note default-x="27">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>48</duration>\
        <voice>1</voice>\
        <type>half</type>\
        <stem default-y="-50.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>middle</syllabic>\
          <text>ma</text>\
        </lyric>\
      </note>\
      <direction>\
        <direction-type>\
          <wedge spread="0" type="stop"/>\
        </direction-type>\
        <offset>2</offset>\
      </direction>\
      <note default-x="197">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-55.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>end</syllabic>\
          <text>ge</text>\
        </lyric>\
      </note>\
    </measure>\
  </part>\
  <!--=========================================================-->\
  <part id="P2">\
    <measure number="1" width="366">\
      <print>\
        <staff-layout number="1">\
          <staff-distance>65</staff-distance>\
        </staff-layout>\
        <staff-layout number="2">\
          <staff-distance>48</staff-distance>\
        </staff-layout>\
        <measure-numbering>none</measure-numbering>\
      </print>\
      <attributes>\
        <divisions>2</divisions>\
        <key>\
          <fifths>-3</fifths>\
          <mode>major</mode>\
        </key>\
        <time>\
          <beats>3</beats>\
          <beat-type>4</beat-type>\
        </time>\
        <staves>2</staves>\
        <clef number="1">\
          <sign>G</sign>\
          <line>2</line>\
        </clef>\
        <clef number="2">\
          <sign>F</sign>\
          <line>4</line>\
        </clef>\
      </attributes>\
      <direction placement="below">\
        <direction-type>\
          <dynamics default-x="129" default-y="-75" halign="left">\
            <pp/>\
          </dynamics>\
        </direction-type>\
        <staff>1</staff>\
        <sound dynamics="40"/>\
      </direction>\
      <note default-x="140">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="140">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="140">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="178">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="178">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="178">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="214">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="214">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="214">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="252">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="252">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="252">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="289">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="289">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="289">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="327">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="327">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="327">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note>\
        <rest measure="yes"/>\
        <duration>6</duration>\
        <voice>2</voice>\
        <staff>2</staff>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="2" width="245">\
      <note default-x="27">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="63">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="63">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="63">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="99">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="99">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="99">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="135">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="135">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="135">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="171">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="171">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="183">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="171">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="207">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="207">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="219">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="207">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note>\
        <rest measure="yes"/>\
        <duration>6</duration>\
        <voice>2</voice>\
        <staff>2</staff>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="3" width="303">\
      <note default-x="26">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <accidental>natural</accidental>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="59">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="59">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="59">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="59">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="92">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="92">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="92">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="92">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="142">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="142">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="142">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="142">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="205">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="205">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="205">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="217">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="260">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="260">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="260">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="272">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note default-x="26">\
        <pitch>\
          <step>F</step>\
          <octave>1</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem default-y="-105.5">down</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>2</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>2</staff>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="4" width="284">\
      <note default-x="27">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <accidental>flat</accidental>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="39">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="69">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="69">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="82">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="69">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="112">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="112">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="124">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="112">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="154">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="154">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="167">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="154">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="197">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="197">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="209">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="197">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="239">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="239">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="252">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="239">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note default-x="27">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>1</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem default-y="-90.5">down</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>2</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>2</staff>\
      </note>\
    </measure>\
  </part>\
  <!--=========================================================-->\
</score-partwise>';

Vex.Flow.Test.MusicXML.Examples.Prelude_C_Major = '<?xml version="1.0" encoding="UTF-8"?>\
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 2.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\
<score-partwise>\
  <identification>\
    <encoding>\
      <software>MuseScore 1.2</software>\
      <encoding-date>2012-09-24</encoding-date>\
      </encoding>\
    </identification>\
  <defaults>\
    <scaling>\
      <millimeters>7.05556</millimeters>\
      <tenths>40</tenths>\
      </scaling>\
    <page-layout>\
      <page-height>1683.78</page-height>\
      <page-width>1190.55</page-width>\
      <page-margins type="even">\
        <left-margin>56.6929</left-margin>\
        <right-margin>56.6929</right-margin>\
        <top-margin>56.6929</top-margin>\
        <bottom-margin>113.386</bottom-margin>\
        </page-margins>\
      <page-margins type="odd">\
        <left-margin>56.6929</left-margin>\
        <right-margin>56.6929</right-margin>\
        <top-margin>56.6929</top-margin>\
        <bottom-margin>113.386</bottom-margin>\
        </page-margins>\
      </page-layout>\
    </defaults>\
  <credit page="1">\
    <credit-words default-x="595.276" default-y="1627.09" font-size="24" justify="center" valign="top">Prelude in C major</credit-words>\
    </credit>\
  <credit page="1">\
    <credit-words default-x="595.276" default-y="1570.39" font-size="14" justify="center" valign="top">BWV 846</credit-words>\
    </credit>\
  <credit page="1">\
    <credit-words default-x="1133.86" default-y="1560.09" font-size="12" justify="right" valign="top">J.S. Bach</credit-words>\
    </credit>\
  <part-list>\
    <score-part id="P1">\
      <part-name>Piano</part-name>\
      <part-abbreviation>Pno.</part-abbreviation>\
      <score-instrument id="P1-I3">\
        <instrument-name>Piano</instrument-name>\
        </score-instrument>\
      <midi-instrument id="P1-I3">\
        <midi-channel>1</midi-channel>\
        <midi-program>1</midi-program>\
        <volume>78.7402</volume>\
        <pan>0</pan>\
        </midi-instrument>\
      </score-part>\
    </part-list>\
  <part id="P1">\
    <measure number="1" width="519.68">\
      <print>\
        <system-layout>\
          <system-margins>\
            <left-margin>87.13</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <top-system-distance>213.74</top-system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <attributes>\
        <divisions>4</divisions>\
        <key>\
          <fifths>0</fifths>\
          <mode>major</mode>\
          </key>\
        <time>\
          <beats>4</beats>\
          <beat-type>4</beat-type>\
          </time>\
        <staves>2</staves>\
        <clef number="1">\
          <sign>G</sign>\
          <line>2</line>\
          </clef>\
        <clef number="2">\
          <sign>F</sign>\
          <line>4</line>\
          </clef>\
        </attributes>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="134.18" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="161.60" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="189.02" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="216.44" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="243.86" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="271.28" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="353.55" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="380.97" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="408.39" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="435.81" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="463.23" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="490.66" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="106.75" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="189.02" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="326.13" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="408.39" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="79.33" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="298.71" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="2" width="470.36">\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="69.10" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="97.64" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="126.19" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="154.74" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="183.29" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="211.83" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="297.48" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="326.02" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="354.57" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="383.12" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="411.67" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="440.22" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="40.55" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="126.19" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="268.93" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="354.57" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="240.38" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="3" width="521.83">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>126.24</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="112.57" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="141.69" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="170.81" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="199.93" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="229.04" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="258.16" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="345.52" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="374.64" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="403.75" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="432.87" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="461.99" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="491.11" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="83.45" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="170.81" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="316.40" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="403.75" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="287.28" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="4" width="479.49">\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.24" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="99.36" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="128.47" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="157.59" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="186.71" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="215.83" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="303.18" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="332.30" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="361.42" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="390.54" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="419.66" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="448.78" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="41.12" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="128.47" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="274.07" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="361.42" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="244.95" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="5" width="515.23">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>126.24</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.75" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="140.45" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="169.16" default-y="10.00">\
        <pitch>\
          <step>A</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="197.86" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="226.57" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="255.27" default-y="10.00">\
        <pitch>\
          <step>A</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="341.39" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="370.10" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="398.80" default-y="10.00">\
        <pitch>\
          <step>A</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="427.51" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="456.22" default-y="-5.00">\
        <pitch>\
          <step>E</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="484.92" default-y="10.00">\
        <pitch>\
          <step>A</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="83.04" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="169.16" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="312.69" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="398.80" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="283.98" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="6" width="486.09">\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="79.77" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <accidental>sharp</accidental>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="108.68" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="137.59" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="166.50" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="195.41" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="224.31" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="311.04" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="339.95" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="368.86" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="397.77" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="426.68" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="455.59" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="40.91" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="137.59" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="282.13" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="368.86" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="253.22" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="7" width="545.24">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>126.24</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="115.50" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="146.08" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="176.66" default-y="5.00">\
        <pitch>\
          <step>G</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="207.24" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="237.82" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="268.41" default-y="5.00">\
        <pitch>\
          <step>G</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest>\
          <display-step>D</display-step>\
          <display-octave>5</display-octave>\
          </rest>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="360.15" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="390.73" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="421.31" default-y="5.00">\
        <pitch>\
          <step>G</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="451.90" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="482.48" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="513.06" default-y="5.00">\
        <pitch>\
          <step>G</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="84.92" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="176.66" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>2</voice>\
        <type>16th</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="329.57" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>2</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="421.31" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>2</voice>\
        <type>quarter</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="298.99" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="8" width="456.08">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="67.31" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="94.97" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="122.62" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="150.28" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="177.93" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="205.59" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="288.55" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="316.21" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="343.86" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="371.52" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="399.17" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="426.83" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>G</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="39.66" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="122.62" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>G</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="260.90" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="343.86" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="233.24" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="9" width="515.40">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>126.24</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.77" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="140.48" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="169.20" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="197.92" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="226.63" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="255.35" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="341.50" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="370.22" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="398.93" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="427.65" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="456.37" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="485.08" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>G</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.05" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="169.20" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>G</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="312.78" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="398.93" default-y="-95.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="284.07" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="10" width="485.92">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.93" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="101.29" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <accidental>sharp</accidental>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="130.75" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="160.22" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="189.68" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="219.15" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="307.54" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="337.00" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="366.46" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="395.93" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="425.39" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="454.86" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.46" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="130.75" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="278.07" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="366.46" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="248.61" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="11" width="509.70">\
      <print new-page="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <top-system-distance>70.00</top-system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.05" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="139.41" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="167.78" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="196.14" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="224.50" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="252.86" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="337.94" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="366.30" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="394.66" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="423.02" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="451.38" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="479.74" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="82.69" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="167.78" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="309.58" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="394.66" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="281.22" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="12" width="491.62">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="71.69" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="101.53" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="131.89" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <alter>1</alter>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <accidental>sharp</accidental>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="161.74" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="191.58" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="221.43" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <alter>1</alter>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="310.96" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="340.80" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="370.64" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <alter>1</alter>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="400.49" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="430.33" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="460.18" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <alter>1</alter>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.84" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <accidental>flat</accidental>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="131.89" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="281.11" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="370.64" default-y="-100.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="251.27" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="13" width="516.13">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.86" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="140.62" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="169.38" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="198.14" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="226.91" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="255.67" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="341.95" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="370.72" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="399.48" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="428.24" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="457.00" default-y="-25.00">\
        <pitch>\
          <step>A</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="485.77" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.10" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="169.38" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="313.19" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="399.48" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="284.43" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="14" width="485.19">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.95" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="100.42" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="129.90" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="159.37" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="188.85" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="218.32" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="306.75" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="336.22" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="365.70" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="395.17" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="424.64" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="454.12" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.47" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <accidental>flat</accidental>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="129.90" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="277.27" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="365.70" default-y="-105.00">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="247.80" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="15" width="521.83">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="112.57" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="141.69" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="170.81" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="199.93" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="229.04" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="258.16" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="345.52" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="374.64" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="403.75" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="432.87" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="461.99" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="491.11" default-y="-15.00">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.45" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="170.81" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="316.40" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="403.75" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="287.28" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="16" width="479.49">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.24" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="99.36" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="128.47" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="157.59" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="186.71" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="215.83" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="303.18" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="332.30" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="361.42" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="390.54" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="419.66" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="448.78" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.12" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="128.47" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>E</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="274.07" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="361.42" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="244.95" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="17" width="521.83">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="112.57" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="141.69" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="170.81" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="199.93" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="229.04" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="258.16" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="345.52" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="374.64" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="403.75" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="432.87" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="461.99" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="491.11" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>C</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.45" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="170.81" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>C</display-step>\
          <display-octave>4</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="316.40" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="403.75" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="287.28" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="18" width="479.49">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.24" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="99.36" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="128.47" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="157.59" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="186.71" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="215.83" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="303.18" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="332.30" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="361.42" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="390.54" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="419.66" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="448.78" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.12" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="128.47" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="274.07" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="361.42" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="244.95" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="19" width="515.50">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.78" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="140.50" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="169.23" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="197.95" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="226.67" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="255.39" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="341.56" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="370.29" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="399.01" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="427.73" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="456.46" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="485.18" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>A</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.06" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="169.23" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>A</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="312.84" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="399.01" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="284.12" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="20" width="485.82">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="75.84" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <accidental>flat</accidental>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="105.01" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="134.18" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="163.35" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="192.52" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="221.69" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="309.20" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="338.37" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="367.54" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="396.71" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="425.88" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="455.05" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>A</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="46.67" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="134.18" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>A</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="280.03" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="367.54" default-y="-110.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="17.50" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="250.86" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="21" width="513.90">\
      <print new-page="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <top-system-distance>70.00</top-system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.58" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="140.20" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="168.83" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="197.45" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="226.07" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="254.69" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="340.56" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="369.19" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="397.81" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="426.43" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="455.06" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="483.68" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>A</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="82.96" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="168.83" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>A</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="311.94" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="397.81" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-150.00">\
        <pitch>\
          <step>F</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="283.32" default-y="-150.00">\
        <pitch>\
          <step>F</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="22" width="487.42">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="75.43" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="104.74" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="134.06" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <accidental>flat</accidental>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="163.37" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="192.68" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="222.00" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="309.94" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="339.25" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="368.57" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="397.88" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="427.19" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="456.51" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="46.11" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="134.06" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="280.62" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="368.57" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="16.80" default-y="-150.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <accidental>sharp</accidental>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="251.31" default-y="-150.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="23" width="527.53">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="123.26" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="152.02" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="180.78" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="209.54" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="238.31" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="267.07" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="353.35" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="382.12" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="410.88" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="439.64" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="468.40" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="497.17" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="94.50" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="180.78" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="324.59" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="410.88" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="65.73" default-y="-140.00">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <accidental>flat</accidental>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="295.83" default-y="-140.00">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="24" width="473.79">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="69.52" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="98.29" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="127.05" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="155.81" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="184.57" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="213.33" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="299.62" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="328.38" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="357.15" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="385.91" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="414.67" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="443.43" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="40.76" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="127.05" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="270.86" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="357.15" default-y="-115.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="242.10" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="25" width="521.83">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="112.57" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="141.69" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="170.81" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="199.93" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="229.04" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="258.16" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="345.52" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="374.64" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="403.75" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="432.87" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="461.99" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="491.11" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.45" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="170.81" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="316.40" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="403.75" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="287.28" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="26" width="479.49">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.24" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="99.36" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="128.47" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="157.59" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="186.71" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="215.83" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="303.18" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="332.30" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="361.42" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="390.54" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="419.66" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="448.78" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.12" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="128.47" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="274.07" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="361.42" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="244.95" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="27" width="509.70">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.05" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="139.41" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="167.78" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="196.14" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="224.50" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="252.86" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="337.94" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="366.30" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="394.66" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="423.02" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="451.38" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="479.74" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="82.69" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="167.78" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="309.58" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="394.66" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="281.22" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="28" width="491.62">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="71.69" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="101.53" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="131.89" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <accidental>sharp</accidental>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="161.74" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="191.58" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="221.43" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="310.96" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="340.80" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="370.64" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="400.49" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="430.33" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="460.18" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <alter>1</alter>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.84" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <accidental>flat</accidental>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="131.89" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="281.11" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="370.64" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="251.27" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="29" width="521.83">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>162.18</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="112.57" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="141.69" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="170.81" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="199.93" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="229.04" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="258.16" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="345.52" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="374.64" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="403.75" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="432.87" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="461.99" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="491.11" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.45" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="170.81" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="316.40" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="403.75" default-y="-120.00">\
        <pitch>\
          <step>E</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="287.28" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="30" width="479.49">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.24" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="99.36" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="128.47" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="157.59" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="186.71" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="215.83" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="303.18" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="332.30" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="361.42" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="390.54" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="419.66" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="448.78" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.12" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="128.47" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="274.07" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="361.42" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="244.95" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="31" width="516.30">\
      <print new-page="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <top-system-distance>70.00</top-system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="111.88" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="140.65" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="169.43" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="198.20" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="226.97" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="255.74" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="342.06" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="370.84" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="399.61" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="428.38" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="457.16" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="485.93" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="83.11" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="169.43" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="313.29" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="399.61" default-y="-125.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="284.52" default-y="-145.00">\
        <pitch>\
          <step>G</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="32" width="485.02">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="70.93" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="100.39" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <accidental>flat</accidental>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="129.85" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="159.32" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="188.78" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="218.25" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="306.64" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="336.10" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="365.56" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        </note>\
      <note default-x="395.03" default-y="-65.00">\
        <pitch>\
          <step>G</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="424.49" default-y="-55.00">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="453.96" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="41.46" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="129.85" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <note>\
        <rest>\
          <display-step>F</display-step>\
          <display-octave>3</display-octave>\
          </rest>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="277.17" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="365.56" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-165.00">\
        <pitch>\
          <step>C</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      <note default-x="247.71" default-y="-165.00">\
        <pitch>\
          <step>C</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        </note>\
      </measure>\
    <measure number="33" width="438.23">\
      <print new-system="yes">\
        <system-layout>\
          <system-margins>\
            <left-margin>75.84</left-margin>\
            <right-margin>0.00</right-margin>\
            </system-margins>\
          <system-distance>92.50</system-distance>\
          </system-layout>\
        <staff-layout number="2">\
          <staff-distance>65.00</staff-distance>\
          </staff-layout>\
        </print>\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="102.12" default-y="-70.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="126.01" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="149.91" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="173.80" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="197.70" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="221.59" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="245.48" default-y="-50.00">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="269.38" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="293.27" default-y="-70.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="317.16" default-y="-60.00">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="341.06" default-y="-70.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="364.95" default-y="-80.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="388.85" default-y="-70.00">\
        <pitch>\
          <step>F</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="412.74" default-y="-80.00">\
        <pitch>\
          <step>D</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest/>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="78.23" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="149.91" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="245.48" default-y="-130.00">\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>8</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="54.33" default-y="-165.00">\
        <pitch>\
          <step>C</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <tie type="start"/>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="245.48" default-y="-165.00">\
        <pitch>\
          <step>C</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <tie type="stop"/>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      </measure>\
    <measure number="34" width="395.90">\
      <note>\
        <rest/>\
        <duration>2</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="59.79" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="83.68" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="107.58" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="131.47" default-y="0.00">\
        <pitch>\
          <step>F</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="155.36" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="179.26" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="203.15" default-y="-10.00">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="227.04" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="250.94" default-y="-30.00">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="274.83" default-y="-20.00">\
        <pitch>\
          <step>B</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>down</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <note default-x="298.73" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
        <beam number="2">begin</beam>\
        </note>\
      <note default-x="322.62" default-y="-35.00">\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="346.51" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
        <beam number="2">continue</beam>\
        </note>\
      <note default-x="370.41" default-y="-45.00">\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>16th</type>\
        <stem>up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
        <beam number="2">end</beam>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note>\
        <rest/>\
        <duration>1</duration>\
        <voice>5</voice>\
        <type>16th</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="35.89" default-y="-135.00">\
        <pitch>\
          <step>B</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>3</duration>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>eighth</type>\
        <dot/>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="107.58" default-y="-135.00">\
        <pitch>\
          <step>B</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>4</duration>\
        <tie type="stop"/>\
        <tie type="start"/>\
        <voice>5</voice>\
        <type>quarter</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="203.15" default-y="-135.00">\
        <pitch>\
          <step>B</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <tie type="stop"/>\
        <voice>5</voice>\
        <type>half</type>\
        <stem>up</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-165.00">\
        <pitch>\
          <step>C</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <tie type="start"/>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="start"/>\
          </notations>\
        </note>\
      <note default-x="203.15" default-y="-165.00">\
        <pitch>\
          <step>C</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>8</duration>\
        <tie type="stop"/>\
        <voice>6</voice>\
        <type>half</type>\
        <stem>down</stem>\
        <staff>2</staff>\
        <notations>\
          <tied type="stop"/>\
          </notations>\
        </note>\
      </measure>\
    <measure number="35" width="167.19">\
      <note default-x="12.00" default-y="-40.00">\
        <pitch>\
          <step>E</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>16</duration>\
        <voice>1</voice>\
        <type>whole</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="12.00" default-y="-30.00">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
          </pitch>\
        <duration>16</duration>\
        <voice>1</voice>\
        <type>whole</type>\
        <staff>1</staff>\
        </note>\
      <note default-x="12.00" default-y="-15.00">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
          </pitch>\
        <duration>16</duration>\
        <voice>1</voice>\
        <type>whole</type>\
        <staff>1</staff>\
        </note>\
      <backup>\
        <duration>16</duration>\
        </backup>\
      <note default-x="12.00" default-y="-165.00">\
        <pitch>\
          <step>C</step>\
          <octave>2</octave>\
          </pitch>\
        <duration>16</duration>\
        <voice>5</voice>\
        <type>whole</type>\
        <staff>2</staff>\
        </note>\
      <note default-x="12.00" default-y="-130.00">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>3</octave>\
          </pitch>\
        <duration>16</duration>\
        <voice>5</voice>\
        <type>whole</type>\
        <staff>2</staff>\
        </note>\
      <barline location="right">\
        <bar-style>light-heavy</bar-style>\
        </barline>\
      </measure>\
    </part>\
  </score-partwise>'
