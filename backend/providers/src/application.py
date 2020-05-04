from flask import Flask
from flask_restful import Api
from resources.courses import CourseList, Course
from resources.domain import domain

routes = {
    '/api/v1/courses': CourseList,
    '/api/v1/courses/<course_id>': Course
}

application = Flask(__name__)
api = Api(application)

for route in routes:
    api.add_resource(routes[route], route, resource_class_args=(domain[route],))

if __name__ == '__main__':
    application.run(debug=True, host='0.0.0.0')
