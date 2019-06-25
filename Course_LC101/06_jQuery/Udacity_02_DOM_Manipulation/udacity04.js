/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!

$(this) refers to the DOM element itself
*/

// Your code goes here!

$('p').each(function(index) {
    console.log("Index " + index + ": " + $(this).text());
    console.log("Index " + index + " length: " + $(this).text().length);
    var user_text = $(this).text();
    var user_text_length = user_text.length;
    $(this).text(user_text + " " + user_text_length);
    //$(this).append("<p>" + $(this).text().length + "</p>");
});

/*
Provided solution:

function numberAdder() {
    var text, number;

    text = $(this).text();

    number = text.length;

    $(this).text(text + " " + number);
}

$('p').each(numberAdder);

*/