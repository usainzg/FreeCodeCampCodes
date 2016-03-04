function factorialize(num) {
  var i = 1;
  var kop = num;
  if(num === 0){
    return 1;
  }
  while(i < num){
    kop *= i;
    i++;
  }
  return kop;
}
