from providers.stepik import Stepik
from resources.base import BaseResource
from utils import dict_slice

from exceptions import HTTP404Error

class CourseList(BaseResource):
    def get(self):
        args = self.parse_args()

        retval = {
            "courses": []
        }

        provider = Stepik(args.token)

        ids = args.ids if args.ids else []
        if not args.ids and args.token:
            courses = provider.request('user-courses', 'get')['user-courses']
            for course in courses:
                ids.append(course['course'])

        for id_ in ids:
            try:
                course_raw = provider.request('courses/{}'.format(id_), 'get')['courses'][0]
                course = {
                    'id': course_raw['id'],
                    'title': course_raw['title'],
                    'description': course_raw['description']
                }

                if course_raw['progress'] and args.token:
                    progress = provider.request(
                        'progresses/{}'.format(course_raw['progress']),
                        'get'
                    )['progresses'][0]

                    # course['progress'] = round(progress['n_steps_passed'] / progress['n_steps'] * 100, 2)
                    course['cost'] = progress['cost']
                    course['score'] = progress['score']
                    course['is_complete'] = progress['is_passed']
                    course['is_subscribed'] = True
                else:
                    course['is_subscribed'] = False
            except HTTP404Error:
                course = {
                    'id': id_,
                    'title': '',
                    'description': '',
                    'is_subscribed': False
                }

            except:
                return {"courses": []}

            retval['courses'].append(dict_slice(course, args.columns))

        return retval

    def post(self):
        return self.get()

class Course(BaseResource):
    def get(self, course_id):
        return {}
