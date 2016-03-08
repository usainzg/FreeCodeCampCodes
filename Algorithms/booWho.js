// option 1, better
(function(bool){
  return typeof bool === 'boolean';
})(false);

// option 2
(function(bool){
  return bool === true ? true : false || bool === false ? true : false;
})(true);
