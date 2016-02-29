$(document).ready(function(){
    var api = "https://es.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";
  var call = "&callback=?";
  
  var urid = 'http://en.wikipedia.org/?curid=';
  var search, title, completeUrl;

  $('#txt').keypress(function(event){
      if(event.which == 13){
        $(".btn").click();
      }          
  });
  
  $(".btn").click(function(){
    search = $('#txt').val();
    title = encodeURIComponent(search);
    
    completeUrl = api + title + call;
    
    $.getJSON(completeUrl, function(data) {
      var counter = 1;
      
      Object.keys(data.query.pages).forEach(function(key){
        $('#result-'+counter).addClass('edited');
        $('#result-'+counter).html("<a href='https://en.wikipedia.org/wiki/"
         + data.query.pages[key].title 
         + "' target='_blank'><h1 class='result-tittle'>"
         + data.query.pages[key].title
         + "</h1><p class='result-text'>"                              + data.query.pages[key].extract
         + "</p></a>");
        counter++;
      });

    });
  });
  
});