function add() {
  if(arguments.length === 1 && !isNaN(arguments[0])){
    var x = arguments[0];
    return function(y){
      if(!Array.isArray(y)){
        return x + y;
      }
    };
  }else if(arguments.length > 1){
    var sum = 0;
    for (var i in arguments){
      if(typeof arguments[i] !== "number") return undefined;
      sum += arguments[i];
    }
    return sum;
  }
}

// ES6
function add() {
  var args = Array.from(arguments);
  return args.some(n => typeof n !== 'number') ? 
    undefined: 
    args.length > 1 ?
      args.reduce((acc, n) => acc += n, 0):
      (n) => typeof n === "number" ? 
        n + args[0]:
        undefined;
}