function titleCase(str) {
  var newstr = str.toLowerCase().split(" ");
  for (var i = 0; i < newstr.length; i++) {
    var f = newstr[i].charAt(0);
    newstr[i] = newstr[i].replace(newstr[i].charAt(0), function replace(f) {
      return f.toUpperCase();
    });

  }
  return newstr.join(" ");
}
