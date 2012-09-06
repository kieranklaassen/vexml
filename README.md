VeXML
=====

MusicXML display using VexFlow

About
-----

VeXML represents MusicXML in JavaScript and will eventually allow VexFlow
to engrave music using MusicXML input.

Display Classes
---------------

These classes are used to layout and display a document using VexFlow.

* __Viewport__

  Represents a canvas used to display the document.

* __StaffSystem__

  Draws a system (the group of staves from each part), laying out VexFlow
  Staves and drawing a bracket.

MusicXML Representation
-----------------------

This the hierarchy of classes VeXML uses to represent MusicXML.

* __Document__

  The highest-level class, which represents a complete MusicXML document.

* __Part__

  An entire MusicXML part, which can contain multiple staffs (e.g. keyboard),
  and/or voices.

* __Measure__

  One measure in one part. The notes may span multiple PartStaffs and/or Voices.
  By accessing one Measure of a PartStaff or Voice, a new Measure is dynamically
  created containing only the notes in that PartStaff or Voice.

* __PartStaff__

  One staff in a part. MusicXML allows voices to use multiple staffs, but
  this may not currently be possible with VexFlow. A staff element does not
  exist in MusicXML; this object represents all notes in a part with the same
  "staff" attribute.

* __Voice__

  One voice in a part. A voice element does not exist in MusicXML; this object
  represents all notes in a part with the same "voice" attribute.
