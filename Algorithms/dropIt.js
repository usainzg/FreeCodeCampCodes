function drop(arr, func) {
  while(!func(arr[0])){
    arr.shift();
  }
  return arr;
}
