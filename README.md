VeXML
=====

MusicXML display using VexFlow

About
-----

VeXML represents MusicXML in JavaScript and will eventually allow VexFlow
to engrave music using MusicXML input.

Using
-----

Add "vexml" as a subfolder of vexflow. The tests in "runtest.html" will work.

Classes
-------

This the hierarchy of classes VeXML uses to represent MusicXML.

* __Document__

  The highest-level class, which represents a complete MusicXML document.

* __StaffSystem__

  Draws a system (the group of staves from each part), laying out VexFlow
  Staves and drawing a bracket.

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
  exist in MusicXML; this object represents all notes in a part or measure with the
  same "staff" attribute.

* __Voice__

  One voice in a part. A voice element does not exist in MusicXML; this object
  represents all notes in a part, staff, or measure with the same "voice" attribute.

* __Note__/__Chord__

  A Note represents a single note element, and a Chord represents a group of
  note elements which are a single chord.
