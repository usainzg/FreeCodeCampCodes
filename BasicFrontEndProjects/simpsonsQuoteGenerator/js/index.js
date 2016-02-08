var quotes = [
	"'Sorry mom, the mob has spoken.'",
	"'…A little help?'",
	"'So I said to myself: what would God do in this situation?'",
	"'The goggles, they do nothing!'",
	"'And I’m not easily impressed — WOW, A BLUE CAR!'",
	"'Since the beginning of time, man has yearned to destroy the sun.'",
	"'Lisa, I’d like to buy your rock.'",
	"'My son’s name is also Bort.'",
	"'We’re here! We’re queer! We don’t want any more bears!'",
	"'There’s an angry mob here to see you, sir.'",
	"'It’s just like I’ve always said: Democracy doesn’t work.'",
	"'I’d kill you if I had my gun!'",
	"'Freedom! Horrible, horrible freedom!'",
	"'You’ll pick many a bean.'",
	"'Stupid like a fox!'",
	"'Maybe there is no moral. Maybe it’s just a bunch of stuff that happened.'",
	"'I’m about to convene another meeting… in bed.'",
	"'I see you’ve played knifey spooney before.'"
];

function generator(){
	var i = Math.floor(Math.random() * quotes.length);
	document.getElementById("quoteText").innerHTML = quotes[i];
}

function tweetQuote(){
	var txt = document.getElementById("quoteText").innerHTML + 'Generate using SimpsonsQuotesGenerator by @usainzg';
	var link = 'http://twitter.com/home?status=' + encodeURIComponent(txt);
	window.open(link, '_blank');
}

window.addEventListener("load", generator());