$(document).ready(function() {
$.getJSON(url, getQuote);
});
//Variables
var url = "https://got-quotes.herokuapp.com/quotes";

var tweetUrl = "https://twitter.com/intent/tweet?text=Hello%20world";
//Functions
var getQuote = function(data) {
  $(".quote-text").text(data.quote);
  $(".author-text").text(data.character);
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
//When Ready


$('#quote').click(function() {
$.getJSON(url, getQuote);
}); 

$('#tweet-quote').on('click', function() {
openURL(tweetUrl);
});
