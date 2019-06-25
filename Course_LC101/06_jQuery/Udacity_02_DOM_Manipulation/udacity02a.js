console.log("Hello 2a");

/*
Quiz 02-07
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    val = $('#input').val();    // Your code goes here!
    //console.log(val);
    
    articleHeader = $('.articles').children('h1');
    articleHeader.text(val);
    //console.log("Text in the header tag is: " + headerText);
});

/*
Quiz 02-08

For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');    // your code goes here!
var firstArticle = articleItems.first();
//console.log(firstArticle.text());

var nameList = firstArticle.children('ul'); //could've used find
    //also need to be careful if there were other <ul> elements in the DOM
console.log("List text: " + nameList.text());
nameList.remove();
//firstArticle.children('ul').remove();
