const input = require('readline-sync');

// Code your transform function here:
function transform(scoringObject) {
    let newPointStructure = {};               //create a blank object to create my transformed data structure
    for (scoringValues in scoringObject) {    //get the array for each key in the old point structure object
        for (let i = 0; i < scoringObject[scoringValues].length; i++) {        //cycle thru the array for each array
            newPointStructure[scoringObject[scoringValues][i].toLowerCase()] = Number(scoringValues);    //add the individual array item and it's old key (it's new value) to the object
        }
    }
    newPointStructure[' '] = 0;
    console.log(newPointStructure);
    return newPointStructure;
}

// Code your initialPrompt function here:
function initialPrompt() {
    console.log(`Welcome to the Scrabble scoring calculator!

Which scoring algorithm would you like to use?

0 - Scrabble: The traditional scoring algorithm.
1 - Simple Score: Each letter is worth 1 point.
2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.`);
    let scoringAlgorithmSelected = Number(input.question("Enter 0, 1, or 2: "))
    return scoringAlgorithmSelected;
}

// Code your runProgram function here:
function runProgram(scoringAlgorithmArray) {
    console.log(initialPrompt());
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

//Define Scoring Objects
//instructions say to code functions, which i would read as separate named functions, but i'm going to store the functions in the objects...
//which is how it's shown in the examples...

//Simple Score: Define a function that takes a word as a parameter and returns a score.
//Each letter within the word is worth 1 point.
let simpleScoreObject = {
    'name': 'Simple Score',
    'description': 'A function with a word parameter that returns a score.',
    'scoreFunction': function(someWord) {
        //one point per letter, so all I need is the length
        return someWord.length;
    }
};

//Bonus Vowels: Define a function that takes a word as a parameter and returns a score.
//Each vowel within the word is worth 3 points, and each consonant is worth 1 point.
let bonusVowelsObject = {
    'name': 'Bonus Vowels',
    'description': 'A function with a word parameter that returns a score based on the number of vowels and consonants.',
    'scoreFunction': function(someWord) {
        //i could create a separate function to determine if the letter is a vowel or not, but I won't...
        //i won't because i don't really need to use that determination anywhere else. plus, being lazy :)
        let alphaVowels = ['a', 'e', 'i', 'o', 'u'];
        //turn my word string in to an array so i can iterate thru it
        let wordArray = someWord.toLowerCase().split("");
        //set my initial score to zero so I can add to it
        let wordScore = 0;
        //loop thru my wordArray and see if the letter is included in the vowel array
        for (let i = 0; i < wordArray.length; i++) {
            if (alphaVowels.includes(wordArray[i])) {
                wordScore += 3;
            } else {
                wordScore += 1;
            }
        }
        return wordScore;
    }
};

//Scrabble Score: Define a function that takes a word and newPointStructure as parameters and returns a score.
//The function uses the data stored in newPointStructure to determine the point value for the word.
let scrabbleScoreObject = {
    'name': 'Scrabble',
    'description': 'Uses the newPointStructure object to determine the score for a given word.',
    'scoreFunction': function (someWord, newPointStructure) {
        let wordArray = someWord.toLowerCase().split("");    //turn my word in to an array so i can iterate thru it easier
        let wordScore = 0;                                   //set my initial wordScore to 0 so i can add to it
        for (let i = 0; i < wordArray.length; i++) {         //loop thru my wordArray to get the scores from the point structure object
            //let char = wordArray[i];
            wordScore = wordScore + newPointStructure[wordArray[i]];
        }
        return wordScore;
    }
};

// Create your scoringAlgorithms array here:
let scoringAlgorithmArray = [scrabbleScoreObject, simpleScoreObject, bonusVowelsObject];

// Call the runProgram function here:
function runProgram(scoringAlgorithmArray) {
    let x1 = initialPrompt();                                                     //use intitialPrompt to select the scoring algorithm
    let userWord = input.question("What word would you like to score? ");         //prompt the user to enter a word to score, repeat until "Stop" is entered
    let userScore;
    while (userWord.toLowerCase() != 'stop') {
        if (x1 == 0) {
            userScore = scoringAlgorithmArray[x1].scoreFunction(userWord, newPointStructure);        //get my score from the function in the appropriate object in the array
        } else {
            userScore = scoringAlgorithmArray[x1].scoreFunction(userWord);        //get my score from the function in the appropriate object in the array
        }
        console.log("Your Word Score is: " + userScore);                          //tell the user what their word score was
        userWord = input.question("What word would you like to score next? ");    //ask the user for the next word before returning to the top of my while loop
    }
}

// Sanity checks
// console.log("JavaScript" + " " + simpleScoreObject.scoreFunction('JavaScript') + " " + bonusVowelsObject.scoreFunction('JavaScript') + " " + scrabbleScoreObject.scoreFunction('JavaScript', newPointStructure));
// console.log("Scrabble" + " " + simpleScoreObject.scoreFunction('Scrabble') + " " + bonusVowelsObject.scoreFunction('Scrabble') + " " + scrabbleScoreObject.scoreFunction('Scrabble', newPointStructure));
// console.log("Zox" + " " + simpleScoreObject.scoreFunction('Zox') + " " + bonusVowelsObject.scoreFunction('Zox') + " " + scrabbleScoreObject.scoreFunction('Zox', newPointStructure));
runProgram(scoringAlgorithmArray);