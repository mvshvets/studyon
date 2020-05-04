'''Base Resource Class
'''
from flask_restful import Resource, reqparse

class BaseResource(Resource):
    def __init__(self, arguments):
        self.parser = reqparse.RequestParser()

        for argument in arguments:
            self.parser.add_argument(**argument)

        super(BaseResource, self).__init__()

    def parse_args(self):
        return self.parser.parse_args()
