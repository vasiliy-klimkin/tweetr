"use strict";

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function(DataHelpers) {

  tweetsRoutes.get("/", function(req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  //MODIFIED POST FUNCTION
  //This function was modified from what it was originally
  //Once the post has happened and the item has been insterted into the database,
  //this function returns back that same object to the client that was posted in.
  //I thought this would be a clever because Instead of removing all contents at the
  // same time and then sending out a brand new array of objects is too heavy for server/client
  //transfer. So what i did was send the last element back that was originally inserted to save
  // network transfer
  //PITFALL FOUND
  // found the issue with this method. Let's say you have 2 users logged in and are commenting. The users
  // will only see their insert and not the each others because the last element that will be inserted is only
  // the last thing they posted in
  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };


    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201);
        res.json(tweet);
      }
    });
  });

  return tweetsRoutes;

}
