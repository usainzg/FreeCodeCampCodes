function chunk(arr, size) {
  // Break it up.
  var arrays = [];
  while (arr.length > 0){
    arrays.push(arr.splice(0, size));
  }

  return arrays;
}
