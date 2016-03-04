function diff(arr1, arr2) {
    var newArr = [];
    for (var i of arr1){
      if(arr2.includes(i) === false) {
        newArr.push(i);
      }
    }

    for (var j of arr2) {
      if(arr1.includes(j) === false) {
        newArr.push(j);
      }
    }

    return newArr;
}
