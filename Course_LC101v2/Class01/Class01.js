console.log("Hello World!");

let welcomeMessage = "Hello World!!", testMessage = "Test";
console.log(welcomeMessage, testMessage);

let getMessage = require('readline-sync');

let newMessage = getMessage.question("Message Text...? ");

console.log(newMessage);