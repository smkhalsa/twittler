$(document).ready(function(){

  var index = 0;

  var loadTweets = function() {
    while(streams.home.length > index){
      var tweet = streams.home[index];
      var $tweet = $('<pre></pre>');
      $tweet.html('@' + tweet.user + ': ' + tweet.message + tweet.created_at);
      $tweet.prependTo(".tweets");
      index += 1;
    }
  };

  loadTweets();

  /*
  $("#tweet-input").on("click", "button", function(){
    var thisTweet = $(this).closest("#tweet-input").find("input");
    console.log(thisTweet.val());
    writeTweet(thisTweet.val());
    thisTweet.reset();
  });
  */

  window.setInterval(function() {
    $("#numNew").text(streams.home.length-index)
  }, 100);

  $(".alert-link").on("click", function(){
    loadTweets();
  });

});
