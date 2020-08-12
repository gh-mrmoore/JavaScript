const functions = require('./functions');
const input = require('readline-sync');

console.log(functions.sayHello());

//get a password from the user
//why would we want to avoid storing passwords as 'clear' text?
let userPassword = input.question("What password would you like to use?");

//encrypt the password and display it back for the purposes of this example
console.log(functions.encryptEntry(userPassword));

//get the user to confirm their password
//this isn't suspicious at all ;)
let userPasswordConfirmed = input.question("Please confirm your password:");

//encrypt the confirmed password and display it back for the purposes of this example
console.log(functions.encryptEntry(userPasswordConfirmed));

//check to see if the passwords match
console.log(functions.matchingStringEntries(userPassword, userPasswordConfirmed));
console.log(functions.matchingStringEntries('test', 'test'));