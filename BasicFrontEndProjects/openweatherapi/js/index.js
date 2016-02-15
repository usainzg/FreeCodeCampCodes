$(function(){
  function init(){
    var location = "http://ip-api.com/json";
    $.getJSON(location, function(data){
      var lat = data.lat;
      var lon = data.lon;
      
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=5d16c084e61b8b1d2751a938f1b0026e", function(data){
        var icon = data.weather[0].icon;
        var icon_replace = $(".weather-app-main-info-icon").attr("src");
        $(".weather-app-main-info-city").html(data.name);
        var temp = Math.round(((data.main.temp) - 273.15));
        var description = data.weather[0].description;
        var cDescription = description.charAt(0).toUpperCase() + description.slice(1);
        
        $(".weather-app-main-info-icon").attr("src", icon_replace.replace("#", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217538/" + icon + ".png"));
        $(".weather-app-main-info-temperature").html(temp + "ºC");
        $(".weather-app-main-info-description").html(cDescription);
      });
    });
    setTimeout(init, 5000);
    console.log("Data update");
  }
  init();
});