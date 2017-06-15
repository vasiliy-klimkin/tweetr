"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err)
  {
    console.error(`Failed has happened ${MONGODB_URI}`);
    throw err;
  }
  console.log("Actually connected to DB :)");

  db.collection("tweets").find().toArray((err, result) => {
  //   if (err)
  //     throw err;

  //   console.log("Found result:" + result);
  //   console.log("type of find result: " +  typeof result);

  //   //GOT THE CURSOR WHICH CAN ONLY ITERATE ONCE
  //   //result.each((err, item) => console.log(" ", item));
  //   // result.toArray((err, resultsArray) => {

  //   //   for (let i in resultsArray)
  //   //   {
  //   //     console.log(resultsArray[i]);
  //   //   }
  //   // });
  //   result.

  console.log("MY ARRAY WITHOUT NESTING ==>  " + result);
  });
  db.close();
});