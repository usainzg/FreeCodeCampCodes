function convert(str) {
  var entities = ["&amp;", "&quot;", "&apos;", "&lt;", "&gt;"];
  var charac = ["&", '"', "'", "<", ">"];

  var strCopy = str.split('');
  for(var i=0; i < strCopy.length; i++){
    for(var j=0; j<charac.length; j++){
      if(strCopy[i] === charac[j]){
        strCopy[i] = entities[j];
      }
    }
  }
  return strCopy.join("");
}
