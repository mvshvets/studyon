import requests
import webbrowser
from urllib.parse import urlparse, parse_qs
from http.server import HTTPServer, BaseHTTPRequestHandler

CLIENT_ID = 'PHixAIzsshddX8pw1RGM33k8ZBtwn7uPdiYetxmt'
SECRET_ID = 'o0zVwGHhAtOQ5mHftbSqW30eMaYP9JycFJHtYCTWPB9ZK877P6gr1DGIoLImOG0w8oNyXwPEBEPiKLvb8scpB0LtqyP0sfkbr2zW1ygQcmzJHUxRAhWXucK5cNXa9EO0'
AUTH_URL = 'https://stepik.org/oauth2/authorize/?response_type=code&client_id={}'.format(CLIENT_ID)
ACCESS_TOKEN_URL = 'https://stepik.org/oauth2/token/'

class Handler(BaseHTTPRequestHandler):
    def do_GET(handler):
        path = urlparse(handler.path)
        query = parse_qs(path.query)

        if not 'code' in query:
            handler.send_response(404)

        code = query['code'][0]

        auth = requests.auth.HTTPBasicAuth(CLIENT_ID, SECRET_ID)
        response = requests.post(
            ACCESS_TOKEN_URL,
            data={
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': 'http://localhost:8000' # Неважно что
            },
            auth=auth
        )

        handler.send_response(200)
        handler.send_header("Content-type", "text/html")
        handler.end_headers()
        handler.wfile.write(response.json()['access_token'].encode())

def handle_request(server_class=HTTPServer, handler_class=Handler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    httpd.handle_request()

webbrowser.open(AUTH_URL)
handle_request()
