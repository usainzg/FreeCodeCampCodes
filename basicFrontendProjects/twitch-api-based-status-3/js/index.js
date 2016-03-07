var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "brunofin", "comster404", "test_channel", "cretetion", "sheevergaming", "TR7K", "OgamingSC2", "ESL_SC2"];

function getInfo() {
  channels.forEach(function(channel) {
    function makeUrl(type, chName) {
      return 'https://api.twitch.tv/kraken/' + type + '/' + chName + '?callback=?';
    };
    $.getJSON(makeUrl('streams', channel), function(data) {
      var game,
        state;

      if (data.stream == null) {
        game = 'Offline';
        state = 'offline';
      } else if (data.stream === undefined) {
        game = 'Closed';
        state = '';
      } else {
        game = data.stream.game;
        state = 'online';
      }

      $.getJSON(makeUrl('users', channel), function(data) {
        console.log(data);
        var url = 'http://www.twitch.tv/' + data.name;
        var logo = data.logo != null ? data.logo : 'http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F',
          name = data.display_name != null ? data.display_name : channel,
          desc = state === 'online' ? '' : '',
          bio = data.bio != null ? data.bio : '';
        html = '<div class="row channel ' +
          state + '"><div class="col-xs-2 col-sm-1" id="icon"><img id="logo" src="' +
          logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' +
          url + '" target="_blank">' +
          name + '</a><p class="bio">' + bio + '</p></div><div class="col-xs-10 col-sm-8" id="streaming">' +
          game + '<span class="hidden-xs">' +
          desc + '</span></div></div>';
        state === "online" ? $(".display").prepend(html) : $(".display").append(html);
      });

    });


  });
}

$(document).ready(function() {
  getInfo();
  $('.selector').on('click', function() {
    var status = $(this).attr('id');
    if (status === 'all') {
      $(".online, .offline").removeClass('hidden');
    } else if (status === "online") {
      $(".online").removeClass("hidden");
      $(".offline").addClass("hidden");
    } else {
      $(".offline").removeClass("hidden");
      $(".online").addClass("hidden");
    }
  });


});
