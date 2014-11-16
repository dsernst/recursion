// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function (obj) {
  var str;
  var i;

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    }
    return 'false';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    str = '[';

    for (i = 0; i < obj.length; i += 1) {
      if (i > 0) {
        str += ',';
      }
      str += stringifyJSON(obj[i]);
    }
    str += ']';

    return str;
  }

  if (typeof obj === 'object') {
    str = '{';

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (typeof i !== 'function' && typeof obj[i] !== 'function') {
          if (i !== 'undefined' && obj[i] !== 'undefined') {
            if (str.length > 1) {
              str += ',';
            }
            str += stringifyJSON(i);
            str += ':';
            str += stringifyJSON(obj[i]);
          }
        }
      }
    }

    str += '}';

    return str;
  }

  if (typeof obj === 'function') {
    return;
  }

};
