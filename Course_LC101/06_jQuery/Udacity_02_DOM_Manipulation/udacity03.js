/*
Adding elements to the DOM using:
...for children...
.append()
.prepend()
...for siblings...
.insertBefore()
.insertAfter()
*/

/*
Quiz 02-11

For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
//add the sibling to family1
$( "<div id='family2'><h1>Family2</h1></div>" ).insertAfter( "#family1" );

//add 'child' bruce to family2
$('#family2').append( "<div id='bruce'><h2>Bruce</h2></div>" );

//add the child madison to bruce
$('#bruce').append( "<div id='madison'><h3>Madison</h3></div>" );

//add the sibling to madison
$( "<div id='hunter'><h3>Hunter</h3></div>" ).insertAfter( "#madison" );

//could've created string variable to pass in to the statements...
//also could've appended Hunter to Bruce