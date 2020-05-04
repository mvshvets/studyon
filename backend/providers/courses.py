from flask import Flask, request
from flask_restful import Resource, Api, reqparse

from stepik import Stepik

app = Flask(__name__)
api = Api(app)

class Courses(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()

        self.parser.add_argument(
            'provider',
            type=str,
            required=True,
            choices=['stepik'],
            help='No provider name provided'
        )

        self.parser.add_argument(
            'token',
            type=str,
            required=True,
            help='No token provided'
        )

        self.parser.add_argument(
            'id',
            type=str,
            required=True,
            help='No course id provided'
        )

        super(Courses, self).__init__()

    def get(self):
        args = self.parser.parse_args()
        api = Stepik(args.token)

        course = api.request('courses/{}'.format(args.id), 'get')
        progress = None

        for c in course['courses']:
            progress = api.request('progresses/{}'.format(c['progress']), 'get')
            progress = progress['progresses'][0]

        retval = {
            'progress': round(progress['n_steps_passed'] / progress['n_steps'] * 100, 2),
            'complete': progress['is_passed']
        }

        return retval

api.add_resource(Courses, '/courses')

if __name__ == '__main__':
    app.run(debug=True)
