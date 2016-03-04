var convert = function(num) {
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanize = '';

  for(var i=0; i < decimalValue.length; i++){
    while (decimalValue[i] <= num) {
      // Add the Roman numeral & decrease numCopy by the decimal equivalent.
      romanize += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanize;
};
