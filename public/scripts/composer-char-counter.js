"use strict";

$( document ).ready(function() {


  $('.new-tweet textarea').on("keyup keypress", function(event) {
    $("#error").text("");
    let span = $(this).next().next();
    span.text(140-$(this).val().length);
    //$(this).parent("form").children(".counter").css({'color': 'red'});

    console.log(Number(span.val()));

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
