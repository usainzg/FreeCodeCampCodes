function fearNotLetter(str) {
  var temp;
  for(var i=0; i < str.length; i++) {
    temp = str.charCodeAt(i);

    if(temp !== str.charCodeAt(0) + i) {
      return String.fromCharCode(temp-1);
    }
  }
  return undefined;
}
