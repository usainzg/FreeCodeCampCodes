function every(collection, pre) {
  return collection.every(function(e){
    return e.hasOwnProperty(pre) && Boolean(e[pre]);
  });
}
