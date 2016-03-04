function sumAll(arr) {
  var min, max;
  min = Math.min(arr[0], arr[1]);
  max = Math.max(arr[0], arr[1]);
  var temp = 0;
  for(max; max >= min ; max--){
    temp += max;
  }
  return temp;
}
