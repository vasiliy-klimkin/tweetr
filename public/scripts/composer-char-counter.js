"use strict";

//The chracter counter function to display how many characters can be entered before
// the max. Also shows how much character overflow has happened in red.
$( document ).ready(function() {


  $('.new-tweet textarea').on("keyup keypress", function(event) {
    $("#error").text("");
    let span = $(this).next().next();
    span.text(140-$(this).val().length);

    if ($(this).val().length > 140)
    {
      span.css({'color': 'red'});
    }
    else
    {
      span.css({'color': 'black'});
    }

  });
});
