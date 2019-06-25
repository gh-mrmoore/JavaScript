console.log("Hello 3");


/*
02.02 - Quiz
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

featuredArticle = $('.featured');   // your code starts here!
featuredArticle.toggleClass('featured');

/*
02.03 - Quiz
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!
article2 = $('.featured');
article2.toggleClass('featured');

article3 = article2.next();
console.log(article3);
article3.toggleClass('featured');

/*
02.04 - Quiz
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $('.nav-item');   // your code goes here!
firstNav = navList.first();    
/*
given answer:

firstItem = navList.children().first()
link = firstItem.find('a');
link.attr("href", "#1");
*/

//firstNav.toggleClass('featured');

firstLink = firstNav.children('a');

firstLink.attr("href", "#1");

/*

*/

/*
02.05 - Quiz
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');   // your code goes here!
articleItems.css("font-size", "20px");