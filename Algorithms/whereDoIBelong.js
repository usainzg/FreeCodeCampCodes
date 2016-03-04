function where(arr, num) {
  // Find my place in this sorted array.
  var filtered = arr.filter(function(val){
    return arr.indexOf(val) !== arr.indexOf(num);
  });
  filtered.push(num);
  filtered.sort(function(a, b){
    return a - b;
  });
  return filtered.indexOf(num);
}
