function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var temp = [];

function largestOfFour(arr) {
  // You can do this!
  var temp = [];
  for(var i=0;i<arr.length;i++){
    temp.push(getMaxOfArray(arr[i]));
  }
  return temp;
}
