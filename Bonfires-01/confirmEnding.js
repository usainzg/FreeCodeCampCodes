function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var len = target.length;

  return str.substr(str.length-len, str.length) === target;
}
