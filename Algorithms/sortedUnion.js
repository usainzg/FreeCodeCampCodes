function unite(arr1, arr2, arr3) {
  var final = [];

  for(var i=0;i < arguments.length; i++){
    var arrArg = arguments[i];

    for(var z=0; z < arrArg.length; z++){
      var index = arrArg[z];

      if(final.indexOf(index) < 0){
        final.push(index);
      }
    }
  }
  return final;
}
