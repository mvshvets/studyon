import requests

class Stepik(object):
    # Base endpoint
    api_base_url = 'https://stepik.org/api'

    # Available resources
    resources = [
        'courses',
        'users',
        'progresses'
    ]

    def __init__(self, token):
        self.token = token

    def request(self, resource, method, **kwargs):
        method = getattr(requests, method)
        response = method(
            '{}/{}'.format(self.api_base_url, resource),
            headers={
                'Authorization': 'Bearer {}'.format(self.token)
            },
            data=kwargs
        )

        if response.status_code == 200:
            return response.json()
        print(response)
        raise requests.HTTPError('No available response')

if __name__ == '__main__':
    stepik = Stepik('EXncrMDodpKK9OZmtvsmo3EBZX0yHA')
    course = stepik.request('courses/2911', 'get')

    for c in course['courses']:
        progress = stepik.request('progresses/{}'.format(c['progress']), 'get')
        print(progress)
