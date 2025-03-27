import json
from math_functions import add

def add_handler(args_json):
    args = json.loads(args_json)
    a = args.get('a', 0)
    b = args.get('b', 0)
    result = add(a, b)
    return json.dumps({"result": result})
