function where(collection, source) {
//Array for storing the matched objects
  var arr = [];
  //For maintaining the number of key-value matches
  var count ;
  collection.forEach(function(collObj) {
  //Initialize to zero for each object in collection
     count = 0 ;
     for(var prop in source){
     //Check whether the key exists and the key-value is matched
        if( collObj.hasOwnProperty(prop) && collObj[prop] === source[prop])
        //Increase the count if matched
        count++;
       }
     //Check whether all key-value pairs in source are matched
     if(count>=Object.keys(source).length){
        arr.push(collObj);
      }

    });
    return arr;
}
