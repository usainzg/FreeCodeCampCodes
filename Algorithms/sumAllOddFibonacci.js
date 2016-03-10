function sumFibs(num) {
    var prevNum = 0;
    var currNum = 1;
    var result = 0;
    while (currNum <= num) {
        if (currNum % 2 !== 0) {
            result += currNum;
        }

        currNum += prevNum;
        prevNum = currNum - prevNum;
    }

    return result;
}
