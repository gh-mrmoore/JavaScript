const input = require('readline-sync');

//here I'm going to take in my prompt from line 42 and call the result coming from my
//anonymous function isValid. Since I'm using the logical 'not' operator, we're
//looking to continue the while statement so long as a false is being returned.
//You can (and did) definitely re-write this to use different logic, but, with a while loop
//you run the risk of creating an infinite loop. This partly comes down to personal style
//and-or the other needs of a larger code-base.
function getValidInput(prompt, isValid) {

   let userInput = input.question(prompt);

   while (!isValid(userInput)) {              //https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_not
      //so line 15 can be read as "While password length is NOT 8 characters or more..."
      //it's slightly counterintuitive because, at least to my thinking, it's the opposite.
      // so !(apple === orange) would actually return a 'true' result...
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
   }

   return userInput;
}

//I want to create an anonymous function that I can more easily pass to my
//named function. By assigning the function to the variable, I can still 
//execute my logic and I can gather the result as a simpler value, in this
//case, I'm passing whether or not the password length is more than 8 characters
//as the variable isValid (so it's true/false)

let isValidPassword = function(password) {

   // Passwords should have at least 8 characters
   if (password.length < 8) {
      return false;
   }

   return true;
};

//I call my function here, I'm going to pass in the prompt and the result of my 
//anonymous function (as a variable)
console.log(getValidInput('Create a password:', isValidPassword));