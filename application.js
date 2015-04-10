$(document).ready(function(){

  var index = 0;

  var loadTweets = function() {
    while(streams.home.length > index){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet" data-user="'+ tweet.user +'"></div>');
      $tweet.html(
        '<pre class="tweet">' +
        '<a href="#" class="user-link" data-toggle="modal" data-target="#tweet-modal" data-user="' + tweet.user + '">@' + tweet.user + '</a>: ' +
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

  $("#tweet-modal").on("show.bs.modal", function(event){
    var link = $(event.relatedTarget);
    var user = link.data('user');
    var modal = $(this);
    modal.find('.modal-title').text('Tweets from @' + user);
    modal.find('.modal-body').html('');
    $(".tweet").filter(function() {
      return ($(this).data('user') === user);
    }).clone().appendTo(modal.find('.modal-body'));
  });

});
