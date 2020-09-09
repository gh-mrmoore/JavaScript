"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = .621;
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Part 2: Print Days to Mars
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// function 
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} will take ${daysToMars} days to reach Mars.`)
// console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToTheMoon)} days to reach the Moon.`)
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.sayHello = function () {
        return "Hello, I am the spaceship " + this.name;
    };
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var daysToGetThere = ((kilometersAway * milesPerKilometer) / speedMph) / 24;
        return daysToGetThere;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var shuttleDetermination = new Spacecraft('Determination', 17500);
console.log(shuttleDetermination.sayHello());
// console.log(`I will take ${shuttleDetermination.getDaysToLocation(kilometersToMars)} to get to Mars`);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
shuttleDetermination.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
shuttleDetermination.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
