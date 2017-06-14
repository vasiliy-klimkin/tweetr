// Test / driver code (temporary). Eventually will get this from the server.
$( document ).ready(function () {


function createTweetElement(tweet)
{
  let name = tweet.user.name;
  let avatar = tweet.user.avatars.small;
  let handle = tweet.user.handle;
  let content = tweet.content.text;
  let time = tweet.created_at;


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
              <span id="days">10 Days Ago</span>
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


var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

renderTweets(data);

// var $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// //console.log($tweet); // to see what it looks like
// $('#all-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});







































// /*/*x`
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

//  function renderTweets(tweets)
//  {

//   let htmlText = "<article class=\"single-tweet\">" +
//           "<header class=\"tweet-header\">" +
//           "<img id=\"pic\" src=\"https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png\">" +
//             "<h5>@MrFields</h5>" +
//             "<h2>Bill Fields</h2>" +
//           "</header>" +
//           "<p class=\"message\">" +
//             "Tweet Content goes here" +
//           "</p>" +
//           "<footer class=\"tweet-footer\">" +
//             "<span id=\"days\">10 Days Ago</span>" +
//           "</footer>";




//   //header
//   for (i in tweets)
//   {
//     let name;
//     let avatar;
//     let handle;
//     let content;
//     name = tweets[i].user.name;
//     avatar = tweets[i].user.avatars.small;
//     handle = tweets[i].user.handle;
//     content = tweets[i].content.text;
//     //console.log(name);
//     //console.log(avatar);
//     //console.log(handle);
//     //console.log(content);

//   }

//  }


//  var tweetData = [{
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// },
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   ];

// var $tweet = renderTweets(tweetData);*/