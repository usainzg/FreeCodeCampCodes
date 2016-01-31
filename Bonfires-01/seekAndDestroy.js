function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(val){
    return args.indexOf(val) === -1;
  });
}
