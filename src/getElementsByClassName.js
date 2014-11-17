// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var matches = [];

  var testElement = function (element) {
    var i;
    if (element.toString() !== "[object Text]") {
      if (element.classList.contains(className)) {
        matches.push(element);
      }

      for (i = 0; i < element.childNodes.length; i += 1) {
        testElement(element.childNodes[i]);
      }
    }
  };

  testElement(document.body);

  return matches;
};
