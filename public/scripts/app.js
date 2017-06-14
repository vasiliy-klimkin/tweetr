// Test / driver code (temporary). Eventually will get this from the server.
$( document ).ready(function () {

  function escape(str) {
    var div = document.createElement('p');
    div.appendChild(document.createTextNode(str));
    //console.log(div.innerHTML);
  return div.innerHTML;
  }



  function createTweetElement(tweet)
  {
    let name = tweet.user.name;
    let avatar = tweet.user.avatars.small;
    let handle = tweet.user.handle;
    let content = escape(tweet.content.text);
    let time = new Date(1000*tweet.created_at);


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
              </footer>
              </article>`;


    // console.log(content);
    // console.log(name);
    // console.log(avatar);
    // console.log(handle);
    return text;

  }



  function renderTweets(tweets)
  {
    for (let i in tweets)
    {
      $('#all-tweets').append(createTweetElement(tweets[i]));
    }
  }

  $("#submitTweet").on("submit", function(event) {
    event.preventDefault();
    let name = "Vasiliy";
    let avatar = "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png";
    let handle = "@hard_Coded_HANDLE";
    let content = $(this).serialize();
    console.log(content);
    $.ajax({
      url:'/tweets',
      method:'POST',
      success: function (serialzedString) {
        console.log("YES I RAN THIS");
      },
      data: content
    });

  });

  function loadTweets()
  {

    $.ajax({
      url:'/tweets',
      method: 'GET',
      success: function(res) {
        renderTweets(res);
      }
    });
  }
  loadTweets();
});