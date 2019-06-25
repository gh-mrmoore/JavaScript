/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/

//user jQuery to pass the function over so the script src statement
//can be in the <head> tag
$(function() {
    $('#my-button').on('click', function() {
        console.log("Button was clicked");
        $('#my-button').remove();
        $('body').attr("class","success");
    });
});
