//Studio Part 1

const input = require('readline-sync');
let str = "LaunchCode";

let numLetters = Number(input.question('How many letters to shift? '));
//console.log(typeof(numLetters));
if (numLetters > str.length) {
    console.log("Oops, something went wrong");
} else {
    //console.log("Nothing to see here");
    let startString = str.slice(0, numLetters);
    let endString = str.slice(numLetters);
    let latinString = endString + startString
    //console.log(endString, startString);
    //console.log(latinString);
    console.log(`'${str}' converts to '${latinString}'.`);
}

//Studio Part 2

let protoArray1 = "3,6,9,12";
let newArray1 = protoArray1.split(",").reverse();
let protoArray1a = protoArray1.split(",").reverse().join();
console.log(newArray1);
console.log(protoArray1a);

console.log();
console.log();

let protoArray2 = "A;C;M;E";
let newArray2 = protoArray2.split(";").sort();
let newProtoArray2 = newArray2.join("-");
console.log(newArray2);
console.log(newProtoArray2 + " " + typeof(newProtoArray2));

console.log();
console.log();

let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";



console.log();
console.log();

//Studio Part 3
const input3 = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a & b) Convert the strings into four alphabetized cabinet arrays.
let foodArray = food.split(",").sort();
console.log(`Snacks are in index: ${foodArray.indexOf('snacks')}`);
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray = sleepAids.split(",").sort();

//c) Initialize, fill, and print cargoHold.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHold);

//d) Query the user.
let cabinetNumber = Number(input3.question("Select a cabinet:"));


//e) Display the contents of the selected cabinet, or print the
// error message.
console.log(`The selected cabinet contains: ${cargoHold[cabinetNumber]}`
);


// Double-bonus!
