//Ask the candidate to enter their name
let input = require('readline-sync');
let candidateName = input.question("What is your name? ");

//set up my array of questions along with the correct answers
let questionArray = [
    ["Question 1", "Where is our LC101 class taking place?", "kansas city"],
    ["Question 2", "Who wrote 'A Game of Thrones'", "george rr martin"],
    ["Question 3", "Who portrayed Jean Luc Picard in Star Trek: TNG?", "patrick stewart"],
    ["Question 4", "What is the first name of our current instructor?", "joe"],
    ["Question 5", "What application are we using for classroom chat?", "slack"]
];

//Use a loop to ask five questions, one at a time, to the candidate
let answerArray = questionArray;

//iterate over each question in my array of questions
for (let i=0; i < questionArray.length; i++) {
    let thisAnswer = input.question(questionArray[i][1] + " ").toLowerCase();
    //Collect the candidate's answers
        // so I could create an all new array for the answers or I could insert the answers in to
        // my existing array...
        // i'm going to create a new array for answers since i could have multiple users taking this
        // quiz and an array isn't the best solution for storing all their data
    answerArray[i].push(thisAnswer);
}

//Check those answers for accuracy (case insensitive equality check)
//Calculate the candidate's overall percentage (while we're at it...)
let totalScore = 0;
for (let x=0; x < questionArray.length; x++) {
    if (answerArray[x][2] == answerArray[x][3]) {
        answerArray[x].push(1);
        totalScore++;
    } else {
        answerArray[x].push(0);
    }
}

//Display the results.
console.clear();
console.log(`Thank you for taking our quiz, ${candidateName}. \n`)
console.log(`Your score was ${totalScore} out of ${answerArray.length}.`)
//Determine if the candidate did well enough to enter our program (need >= 80% to pass)
if (totalScore/answerArray.length >= .8) {
    console.log("You passed and did well enough to enter our program!");
} else {
    console.log("I'm sorry, you did not do well enough to enter our program.")
}