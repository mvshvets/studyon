provider = {
    'name': 'provider',
    'type': str,
    'required': True,
    'choices': ['stepik']
}

token = {
    'name': 'token',
    'type': str,
    'required': False
}

ids = {
    'name': 'ids',
    'action': 'append',
    'type': str,
    'required': False
}

columns = {
    'name': 'columns',
    'action': 'append',
    'type': str,
    'required': False
}

domain = {
    '/api/v1/courses': [
        provider,
        token,
        ids,
        columns
    ],

    '/api/v1/courses/<course_id>': [
        provider,
        token,
        columns
    ]
}
