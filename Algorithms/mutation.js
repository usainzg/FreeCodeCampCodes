function mutation(arr) {
  var str = arr[1].toUpperCase().split("");
  var str2 = arr[0].toUpperCase();
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str2.indexOf(str[i]) >= 0) {
      sum++;
    }
  }
  if (sum == str.length) {
    return true;
  } else {
    return false;
  }
}
