// Test / driver code (temporary). Eventually will get this from the server.
"use strict";
$( document ).ready(function () {

  //Function to protect against javascript injections. If someone tries to insert
  // a tweet with some kind of code, this will be converted into plain text (which means
  // all the special characters will be coded in. ie: '>' will be &gt).
  function escape(str) {
    var div = document.createElement('p');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  //Functions gets a tweet in a JSON representation. Function then gets all the elemnts
  //parced into variables and constructs HTML representation of that tweet with all the
  //variables. Once thats done it returns that representation

  function createTweetElement(tweet)
  {
    let name = tweet.user.name;
    let avatar = tweet.user.avatars.small;
    let handle = tweet.user.handle;
    let content = escape(tweet.content.text);
    let unformattedDate = new Date(tweet.created_at);
    let time = unformattedDate.toDateString();



    let text = `<article class="single-tweet">
              <header class="tweet-header">
                <img id="pic" src="${avatar}">
                <h5>${handle}</h5>
                <h2>${name}</h2>
              </header>
              <p class="message">
                ${content}
              </p>
              <footer class="tweet-footer">
                <span id="days">${time}</span>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  <i class="fa fa-retweet" aria-hidden="true"></i>
                  <i class="fa fa-flag" aria-hidden="true"></i>

              </footer>
              </article>`;

    return text;

  }


  //Uses Jquery to append HTML representations of a signle tweet onto the webpage
  // thats being viewed but user/client. Tweets is an array of single Tweet JSON objects
  function renderTweets(tweets)
  {
    for (let i in tweets)
    {
      $('#all-tweets').append(createTweetElement(tweets[i]));
    }
  }

  //Gets tweet content and then sends a request to post this tweet in the server
  //NODE: The error checking for a NULL tweet and an overflowing tweet are done here
  $("#submitTweet").on("submit", function(event) {
    event.preventDefault();
    let name = "Vasiliy";
    let avatar = "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png";
    let handle = "@hard_Coded_HANDLE";
    let content = $(this).serialize();


    //If tweet content is null, else if Tweet is overflown, else post
    if (content.length === 5)
      $("#error").text("Tweet cannot be empty!");
    else if (content.length >= 145)
      $("#error").text("Tweet exceeds max characters!");
    else
    {
      $.ajax({
        url:'/tweets',
        method:'POST',
        success: function (serialzedString) {
          //clean up the text inside the textarea
          $("#submitTweet textarea").val("");
          $('#all-tweets').prepend(createTweetElement(serialzedString));
        },
        data: content
      });
    }

  });

  //Toggle animations and logic for the compose button using the value
  //attribute of the compose button
  $("#toggle-tweet-post").on("click", function() {

    if (!$("#toggle-tweet-post").val())
    {
      $("#toggle-tweet-post").val(1);
      $(".new-tweet").slideUp();
    }
    else
    {
      $("#toggle-tweet-post").val("");
      $(".new-tweet").slideDown();
      $("#submitTweet textarea").focus();
    }
  });

  //Get all tweets from server and post them to the website in real time.
  function loadTweets()
  {

    $.ajax({
      url:'/tweets',
      method: 'GET',
      success: function(res) {
        renderTweets(res.reverse());
      }
    });
  }
  loadTweets();
});