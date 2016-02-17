var entries = [];
var total = 0;

var temp = '';

$('button').on('click', function(){
  var val = $(this).text();
  
  if (!isNaN(val) || val === '.') {
    temp += val;
    $("#answer").val(temp.substring(0,10));
    
  }else if(val === 'AC'){
    entries = [];
    temp = '';
    total = 0;
    $('#answer').val('');
    
  }else if(val === 'CE'){
    temp = '';
    $('#answer').val('');
  }else if(val === 'x'){
    entries.push(temp);
    entries.push('*');
    temp = '';
  }else if(val === '÷'){
    entries.push(temp);
    entries.push('/');
    temp = '';
  }else if(val === '='){
    entries.push(temp);
    
    var nm = Number(entries[0]);
    for(var i=1;i<entries.length;i++) {
      var nextNumber = Number(entries[i+1]);
      var symbol = entries[i];
      
      if(symbol === '+') {
        nm += nextNumber;
      }else if(symbol === '-') {
        nm -= nextNumber;
      }else if(symbol === '*') {
        nm *= nextNumber;
      }else if(symbol === '/') {
        nm /= nextNumber;
      }
      i++;
    }
    
    if(nm < 0) {
      nm = '-' + Math.abs(nm);
    }
    
    $('#answer').val(nm);
    entries = [];
    temp = '';
  }else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});