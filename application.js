$(document).ready(function(){

  var index = 0;

  var loadTweets = function() {
    while(streams.home.length > index){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet" data-user="'+ tweet.user +'"></div>');
      $tweet.html(
        '<pre>' +
        '<a href="#" class="user-link">@' + tweet.user + '</a>: ' +
        tweet.message + '</pre>' +
        '<span class="time-stamp">' + tweet.created_at + '</span>'
        );
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

  $(".user-link").on("click", function(){
    var user = $(this).closest(".tweet").data("user");
    $(".tweet").filter(function() {
      return ($(this).data("user") !== user);
    }).hide();
  });

});
