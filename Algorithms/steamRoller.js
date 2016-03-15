function steamroller(arr) {
  var filtered = [];
  var toFil = function(arg){
    if(!Array.isArray(arg)){
      filtered.push(arg);
    }else{
      for(var i in arg){
        toFil(arg[i]);
      }
    }
  };
  arr.forEach(toFil);
  return filtered;
}
