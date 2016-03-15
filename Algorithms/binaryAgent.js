function binaryAgent(str) {
  var splited = str.split(' ');
  var num = [], strD = [];
  splited.forEach(function(e){
    num.push(Number.parseInt(e, 2));
  });
  num.forEach(function(e){
    strD.push(String.fromCharCode(e));
  });
  return strD.join('');
}
