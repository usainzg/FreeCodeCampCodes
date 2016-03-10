function isPrime(_num) {
  for (var i=2; i < _num; i++){
    if(!(_num % i)){
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var sum = 0;
  for(var i=2; i <= num; i++) {
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;
}
