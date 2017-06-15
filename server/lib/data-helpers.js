"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        // db.tweets.push(newTweet);
        // callback(null, true);
        db.collection("tweets").save(newTweet);
        callback(null,true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      simulateDelay(() => {
        db.collection("tweets").find().toArray((err,tweets) => {
          if (err)
            throw err;
          callback(null,tweets);
        });
      });
    }

  };
}
