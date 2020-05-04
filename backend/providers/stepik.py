'''stepik.org API wrapper
'''
import requests

class Stepik(object):
    # Base endpoint
    endpoint = 'https://stepik.org/api'

    # Available resources
    resources = [
        'courses',
        'users',
        'progresses'
    ]

    def __init__(self, token=None):
        self.token = token

    def request(self, resource, method, **kwargs):
        method = getattr(requests, method)
        headers = {}

        if self.token:
            headers['Authorization'] = 'Bearer {}'.format(self.token)

        response = method(
            '{}/{}'.format(self.endpoint, resource),
            headers=headers,
            data=kwargs
        )

        if response.status_code == 200:
            return response.json()

        raise requests.HTTPError('No available response')
