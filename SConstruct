"""
VexFlow / VeXML Build Script
Requires: SCons, Git, and Google Closure Compiler
"""

from vexflow_scons import *

vexml_sources = [
    "header.js",
    "base.js",
    "musicxml.js",
    ]

Import("dbg opt")

vexml_dbg = dbg.Clone(JS_DEFINES = {})
vexml_opt = opt.Clone(JS_DEFINES = {})

build_and_stamp("vexml-dbg.js", vexml_sources, vexml_dbg);
build_and_stamp("vexml-free.js", vexml_sources, vexml_opt);
