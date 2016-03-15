function smallestCommons(arr) {
  // Sort the array
  arr = arr.sort();
  var min = arr[0];
  var max = arr[1];

  var numbers = [];
  var count = 0;

  //Here push the range of values into an array
  for (var i = min; i <= max; i++) {
    numbers.push(i);
  }
  //Here freeze a multiple candidate starting from the biggest array value - call it j
  for (var j = max; j <= 1000000; j+=max) {

    //I increase the denominator from min to max
    for (var k = arr[0]; k <= arr[1]; k++) {

      if (j % k === 0) { // every time the modulus is 0 increase a counting
        count++; // variable
      }
    }

    //If the counting variable equals the lenght of the range, this candidate is the least common value
    if (count === numbers.length) {
      return j;
    }
    else{
      count = 0; // set count to 0 in order to test another candidate
    }
  }
}
