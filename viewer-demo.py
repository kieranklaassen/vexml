#!/usr/bin/python
# Serve .html, .css, .js files in the search paths.

import os
import posixpath
import urllib
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

SEARCH_PATHS = (
  '.',
  './support',
  '..',
  '../build'
)

import logging
class RequestHandler(SimpleHTTPRequestHandler):
  def translate_path(self, path):
    root = os.getcwd()
    # Normalize path
    path = posixpath.normpath(urllib.unquote(path.split('?',1)[0].split('#',1)[0]))
    if path[0] == '/': path = path[1:]

    # Use 'viewer-ajax.html' as index
    if path == '':
      return 'viewer-ajax.html'

    for search_path in SEARCH_PATHS:
      full_path = os.path.join(search_path, path)
      print full_path
      if os.path.isfile(full_path):
        return full_path
    return path

if __name__ == '__main__':
  BaseHTTPServer.test(RequestHandler, BaseHTTPServer.HTTPServer)
