var answer = '';
var cls = false;
var calc = '';

$(document).ready(function(){
  $('button').click(function(){
    var val = $(this).attr('value');
    if(parseInt(val, 10) == val || val === "." || val === "/" || val === "*" || val === "+" || val === "-" || val === "%"){
      if(cls === false){
        calc += val;
        $('#answer').val(calc);
      }else{
        calc = val;
        $('#answer').val(calc);
        clear = false;
      }
    }else if(val === "AC"){
      calc = '';
      $('#answer').val("");
    }else if(val === "CE"){
      calc = calc.slice(0, -1);
      $('#answer').val(calc);
    }else if(val === "="){
      answer = eval(calc);
      $('#answer').val(answer);
      clear = true;
    }
  });
});