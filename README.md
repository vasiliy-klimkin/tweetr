# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Final Product(ScreenShots)

-![Main Screen](https://github.com/waff1e/tweetr/blob/master/docs/mainScreen.png?raw=true)
-![Hover on tweet with colored buttons](https://github.com/waff1e/tweetr/blob/master/docs/hoverOnTweet.png?raw=true )
-![Error](https://github.com/waff1e/tweetr/blob/master/docs/error.png?raw=true)
-![Compose](https://github.com/waff1e/tweetr/blob/master/docs/composed.png?raw=true)


## Dependencies

- Express
- Node 5.10.x or above
- body-parser: 1.15.2
- chance: 1.0.2
- express: 4.13.4
- md5: 2.1.0
- mongodb: 2.2.28

## Things to Consider

When using ajax to post a tweet, the function sends it to express server where it uses the functions to create a JSON object that will be posted.
However once posted the server will respond back with the object that has just been inserted inside instead of sending the entire mongo collection. This was advantageous to do so for sending less data back to the client.
