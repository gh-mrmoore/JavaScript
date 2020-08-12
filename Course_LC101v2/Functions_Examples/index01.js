//group any constants that I might have here
const input = require('readline-sync');

//group any functions that I might have here
function sayHello() {
    return "Hello";
}

function encryptEntry(someText) {
    //split my text string in to an array to work with each letter
    let textArray = someText.split('');
    let reverseTextArray = textArray.reverse();
    let passwordString = reverseTextArray.join('');
    return passwordString;
}

function matchingStringEntries(string1, string2) {
    if (string1 === string2) {
        return true;
    } else {
        return false;
    }
}


//start writing my actual program here...

console.log(sayHello());

//get a password from the user
//why would we want to avoid storing passwords as 'clear' text?
let userPassword = input.question("What password would you like to use?");

//encrypt the password and display it back for the purposes of this example
console.log(encryptEntry(userPassword));

//get the user to confirm their password
//this isn't suspicious at all ;)
let userPasswordConfirmed = input.question("Please confirm your password:");

//encrypt the confirmed password and display it back for the purposes of this example
console.log(encryptEntry(userPasswordConfirmed));

//check to see if the passwords match
console.log(matchingStringEntries(userPassword, userPasswordConfirmed));
console.log(matchingStringEntries('test', 'test'));