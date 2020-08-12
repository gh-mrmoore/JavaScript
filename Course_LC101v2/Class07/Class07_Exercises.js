// Code your crewReports function here:
function crewReports(objectName) {
    return `${objectName.name} is a ${objectName.species}. They are ${objectName.age} years old and ${objectName.mass} kilograms. Their ID is ${objectName.astronautID}.`
}

// Code your fitnessTest function here:
function fitnessTest(someArray) {
    let teamResults = [];
    let startingSteps = 0;
    let turnCount = 0;

    for (let i = 0; i < someArray.length; i++) {    //loop thru each item in the array
        //use a while loop to get the number of iterations to get to 20 steps
        while (startingSteps <= 20) {
            startingSteps += someArray[i].move();
            turnCount++;
        }
        let responseString = `${someArray[i].name} took ${turnCount} turns to take 20 steps.`;
        teamResults.push(responseString)
    }
    return teamResults;
}


// Code your objects and crew array here:
let chimpOne = {
    astronautID: 1,
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function() {
        return Math.floor(Math.random() * 10);
    }
};

let salamander = {
    astronautID: 2,
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function() {
        return Math.floor(Math.random() * 10);
    }
};

let chimpTwo = {
    astronautID: 3, 
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    move: function() {
        return Math.floor(Math.random() * 10);
    }
};

beagleOne = {
    astronautID: 4,
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    move: function() {
        return Math.floor(Math.random() * 10);
    }
};

let tardigrade = {
    astronautID: 5,
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    move: function() {
        return Math.floor(Math.random() * 10);
    }
};

let snailOne = {
    astronautID: 6,
    name: "Zippy",
    species: "Snail",
    mass: .50,
    age: 1,
    move: 3
}

//create the crew array here for testing
crewArray = [chimpOne, salamander];

console.log(fitnessTest(crewArray));

// for (let i = 0; i < crewArray.length; i++) {
//     console.log(fitnessTest(crewArray)[i]);
// }

// console.log(typeof snailOne.move);
// console.log(typeof chimpOne.move);