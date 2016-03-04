function truncate(str, num) {
  // Clear out that junk in your trunk
  var strDou="";
  if(num <= 3){
    strDou = str.slice(0, num);
    strDou = strDou + "...";
    return strDou;
  }else if(str.length > num){
    strDou = str.slice(0, num-3);
    strDou = strDou + "...";
    return strDou;
  }else{
    return str;
  }

}
