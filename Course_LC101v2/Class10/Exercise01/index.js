/*
Exercises: Exceptions
Part 1: Zero Division (Throw)
Write a function called divide that takes two parameters: a numerator and a denominator.

Your function should return the result of numerator / denominator.

However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

Hint: You can use an if / throw statement to complete this exercise.

Before Submitting
Comment out ALL console.log statements
*/

function divide (numerator, denominator) {
    try {
        if (denominator == 0) throw "Attempted to divide by zero.";
        if (denominator != 0) throw numerator / denominator;
    } catch (error) {
        return error;
    }
}

console.log(divide(5, 2));

