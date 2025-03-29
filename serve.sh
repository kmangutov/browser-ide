#!/bin/bash

echo "Starting HTTP server on port 8000 with CORS support..."
echo "Open your browser to http://localhost:8000"
echo "Press Ctrl+C to stop the server"

# Run Python HTTP server with CORS headers for development
python -c "
import http.server
import socketserver
from functools import partial

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

PORT = 8000
handler = partial(CORSHTTPRequestHandler, directory='.')
with socketserver.TCPServer(('', PORT), handler) as httpd:
    print(f'Serving at http://localhost:{PORT}')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('Server stopped.')
" 