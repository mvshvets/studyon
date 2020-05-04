def dict_slice(obj, by):
    if not by:
        return obj

    retval = {}
    for key in by:
        if key in obj:
            retval[key] = obj[key]

    return retval
