function rot13(str) {
    var strOk="";
    for(var myVar in str){
        if(str.charCodeAt(myVar) < 65 || str.charCodeAt(myVar) > 91) {
            strOk += String.fromCharCode(str.charCodeAt(myVar));
            continue;
        }
        if(str.charCodeAt(myVar) < 78){
            strOk += String.fromCharCode(str.charCodeAt(myVar) + 13);
        }
        else{
            strOk += String.fromCharCode(str.charCodeAt(myVar) - 13);

        }
    }

    return strOk;
}
