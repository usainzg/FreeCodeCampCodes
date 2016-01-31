function findLongestWord(str) {
  var split = str.split(' ');
  var max = split[0].length;
  for(var i=0, len=split.length;i<len;i++){
    if(split[i].length > max){
      max = split[i].length;
    }
  }
  return max;
}
