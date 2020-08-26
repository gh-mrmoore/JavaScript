const input = require('readline-sync');   //I'd recommend always keeping your imports/requirements at the top of
                                          //the file to avoid hoisting and/or any program flow issues


// Code your transform function here:
function transform(oldPointStructure) { 
    let newStructure = {};

    for (let oldKey in oldPointStructure) {
        for (let i = 0; i < oldPointStructure[oldKey].length; i++) {
            newStructure[oldPointStructure[oldKey][i].toLowerCase()] = Number(oldKey);
        }
    }
    return newStructure;
}




// Code your initialPrompt function here:
function initialPrompt() {
    console.log("Which scoring algorithm would you like to use?");
    console.log(" ");
    let num = input.question("Enter 0, 1, or 2:");
    num = Number(num);
    if (num > 2) {
        num = input.question("Invalid input. Please enter 0, 1 or 2:");
    }

    console.log(`You chose scoring algorithm: ${num}`);
    console.log(" ");

}



// Code your runProgram function here:
function runProgram(scoringArray) {
    //here is our nexus, so how can we use this function to call our other functions???
    //accept scoringAlgorithms array
    //use initialPrompt to pick the algorithm
    //prompt the user to enter a word to score
    //use the algorithm to score the word
    //display the score for the word
    //repeat until "Stop" is entered by user
}



// Here is the oldPointStructure object:
const oldPointStructure = {
1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
2: ['D', 'G'],
3: ['B', 'C', 'M', 'P'],
4: ['F', 'H', 'V', 'W', 'Y'],
5: ['K'],
8: ['J', 'X'],
10: ['Q', 'Z']
};


// Use the transform function to create the newPointStructure object here:
let newPointStructure = transform(oldPointStructure);  //you can simplify a lot here by using your function








// Create your scoringAlgorithms array here:
let scoringAlgorithms = [______];            //what are we going to put here???

//you need an array of objects, per the instructions
//so do you want to create the objects directly in the array or 
//create them as variables then add the variables to the array?


//i moved your functions to calculate scores up here.
//You've got the right pieces in the wrong places...
function scrabbleScore(newPointStructure) { 
    for (let i = 0; i < newPointStructure.length; i++) { 
        points = newPointStructure;
    } 
    return points;
}

function simpleScore(word) {
    return word;
}

function bonusVowels(word) {
    for (let i = 0; i < bonusVowels.length; i++) {
        if (letter == "a", "e", "i", "o", "u") {
            add + 3;
        } else { 
            add + 1;
        }
    }
    return word;
}




// Call your runProgram function here:
runProgram(scoringAlgorithms);



// Sanity Checks
//console.log(transform(oldPointStructure));     //check if the transform function works correctly

// console.log("JavaScript" + " " + simpleScoreObject.scoreFunction('JavaScript') + " " + bonusVowelsObject.scoreFunction('JavaScript') + " " + scrabbleScoreObject.scoreFunction('JavaScript', newPointStructure));
// console.log("Scrabble" + " " + simpleScoreObject.scoreFunction('Scrabble') + " " + bonusVowelsObject.scoreFunction('Scrabble') + " " + scrabbleScoreObject.scoreFunction('Scrabble', newPointStructure));
// console.log("Zox" + " " + simpleScoreObject.scoreFunction('Zox') + " " + bonusVowelsObject.scoreFunction('Zox') + " " + scrabbleScoreObject.scoreFunction('Zox', newPointStructure));







/*
Your code is commented out below this line. I've copied and pasted sections above with comments inserted




// Code your transform function here:
let welcomeMessage = function() {
    console.log("Welcome to the Scrabble score calculator!");
    console.log(" ");
};

welcomeMessage();

// Code your initialPrompt function here:

let initialPrompt = function() {
    console.log("Which scoring algorithm would you like to use?");
    console.log(" ");
};

initialPrompt();

function algoArrays(choice) {
  for (var i = 0; i < choice.length; i++) {
    console.log(choice[i]);
  }
}
  
 algoArrays(["0 - Scrabble: The traditional scoring algorithm.",
            "1 - Simple Score: Each letter is worth 1 point.",
            "2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt."]);
    console.log(" ");
    
const input = require('readline-sync');
let num = input.question("Enter 0, 1, or 2:");
num = Number(num);
if (num > 2) {
    num = input.question("Invalid input. Please enter 0, 1 or 2:");
}     
    console.log(`You chose scoring algorithm: ${num}`);
    console.log(" ");

// Code your runProgram function here:

// Here is the oldPointStructure object:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

// Use the transform function to create the newPointStructure object here:

function transform(oldPointStructure) { 
let newStructure = {};
 
  for (let oldKey in oldPointStructure) {
     for (let i = 0; i < oldPointStructure[oldKey].length; i++) {
       newStructure[oldPointStructure[oldKey][i].toLowerCase()] = Number(oldKey);
     }
 }
  return newStructure;
}

let newPointStructure = transform(oldPointStructure);
//     console.log(newPointStructure);
//   for (let i = 0; i < newPointStructure.length; i++) {
//     console.log(newPointStructure[i].toLowerCase());
// }

// Create your scoringAlgorithms array here:
let scoringAlgorithms = {
  name: ["Scrabble", "Simple Score", "Bonus Vowels"],
  description: ["The traditional scoring algorithm", 
  "Each letter is worth 1 point",
  "Vowels are worth 3 pts, and consonants are 1 pt"],
  scoreFunction: ["scrabbleScore", "simpleScore", "bonusVowels"]
};

function scrabbleScore(newPointStructure) { 
  for (let i = 0; i < newPointStructure.length; i++) { 
    points = newPointStructure;
  } 
    return points;
}
function simpleScore(word) {
  return word;
}
function bonusVowels(word) {
  for (let i = 0; i < bonusVowels.length; i++) {
   if (letter == "a", "e", "i", "o", "u") {
     add + 3;
   } else { 
     add + 1;
  }
}
  return word;
}

// Call the runProgram function here:
let word = input.question("Enter a word:");
    console.log(`You entered the word: ${word}`);
    console.log(" ");
    
*/