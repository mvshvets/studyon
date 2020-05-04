from urllib3.exceptions import HTTPError as BaseHTTPError

class HTTP404Error(BaseHTTPError):
    '''404 error occurred
    '''
    pass
