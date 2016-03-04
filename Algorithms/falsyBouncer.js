function bouncer(arr){
  var falsys = [undefined, "", false, null, 0];
  var isFalsy = arr.filter(function(val){
    console.log(isNaN(val));
    return !(val === "" || typeof val === undefined || val === null || val === 0 || val === false || (isNaN(val) && typeof val !== 'string'));
  });
  return isFalsy;
}
