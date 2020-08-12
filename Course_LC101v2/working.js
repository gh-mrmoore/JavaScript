const input = require("readline-sync");

// Code your transform function here:
function transform(objectName){
    let newObject = {};               // intializes the new object.

    for (item in objectName) {        // loop to iterate through the original object
        for (let i = 0; i < objectName[item].length; i++) {      //creates an array of letters for each key
            newObject[objectName[item][i].toLowerCase()] = Number(item);
        }
    }
    return newObject
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
let newPointStructure = transform(oldPointStructure);

console.log(newPointStructure);
 


// Code your initialPrompt function here:
function initialPrompt() {
  console.log(
  `Welcome to the Scrabble Score calculator!\n
  Which scoring algorithm would you like to use?\n
  0 - Scrabble: The traditional scoring algorithm.
  1 - Simple Score: Each letter is worth 1 point.
  2 - Bonus Vowels: Vowels are worth 3pts, and consonates are 1 pt.\n`)
  
  let info = input.question("Please enter 0, 1, or 2: ")
}

// Code your runProgram function here:
function runProgram(scoringAlgorithms){
  initialPrompt();
  let word = input.question("Please enter a word to score, or stop to end the program: ")
  word = word.toLowerCase();
  
  if (word === 'stop'){
    return 'Goodbye';
  }else{
    
  }
}



// Create your scoringAlgorithms array here:

//calculates score based on number of chars
function getSimpleScore(word){
  //this method counts the characters and stores it in score.
  let score = word.length;
  return score;
}

//determines the score with vowels weighted in value.
function getVowelScore(word){

  //initializes the variables used for vowel counting  
  let vowelCount = 0;
  let score = 0;
  let consonates = word.length - vowelCount;
  //case insensativity
  word = word.toLowerCase();

    //for loop to iterate through the word to determine if the vowel count
    for (i = 0; i <= word.length - 1; i++) {
      if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u"){
        vowelCount ++
      }
      
      //subtracts vowel count from word length the get the number of consonates, determines vowel score, and then total score.
      consonates = word.length - vowelCount;
      vowelScore = vowelCount * 3;
      score = consonates + vowelScore;
    }
    
//returns the above score.
return score  
}

//determines score based on the new point structure. 
function getScrabbleScore(word, object){
  //case insensativity
  word = word.toLowerCase();
  
  //creates a variable for the score and an array to hold the characters of the word for comparison.
  let score = 0;
  let wordArray = word.split('');
  
  //a for in loop to iterate through the new point structure object.
  for (letter in object){
    if (wordArray.includes(letter)){
    score += Number(object[letter]);
    }
  }

//returns the score based on the newPointStructure.
return score;
}


//algorithm functions
let scrabble = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoreFunction: getScrabbleScore
};

let simpleScore ={
  name: "Simple Score",
  Description: "Each letter is worth 1 point.",
  scoreFunction: getSimpleScore
};

let bonusVowels = {
  Name: "Bonus Vowels",
  Description: "Each vowel is worth 3pts, and each consonate is worth 1pt.",
  scoreFunction: getVowelScore
}

//algorithm array
let scoringAlgorithms = [scrabble, simpleScore, bonusVowels];

// Call the runProgram function here:
// runProgram();
