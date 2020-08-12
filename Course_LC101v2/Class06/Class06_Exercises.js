// //11.10.1.1. Complete the Map¶
// x = function(someVariable) {
//     if (typeof someVariable == "string") {
//         return "ARRR!";
//     } else if (typeof someVariable == "number") {
//         return someVariable * 3;
//     } else {
//         return someVariable;
//     }
// }

// console.log(x("String"));
// console.log(x(5));
// console.log(x(["string", 4, "stirng2", 5]));

// let exampleArray = ['Elocution', 21, 'Clean teeth', 100];

// let changedExampleArray = exampleArray.map(x);

// console.log(exampleArray);
// console.log(changedExampleArray);

//11.10.2. Raid Yonder Shuttle¶
function checkFuel(level) {
    if (level > 100000){
      return 'green';
    } else if (level > 50000){
      return 'yellow';
    } else {
      return 'red';
    }
  }

let harmlessFuelDoubleCheck = function(fuelLevel) {
    let testFuel = 1000;
    while (checkFuel(fuelLevel - (testFuel + 100)) == 'green') {
      testFuel = testFuel + 100;
    }
    return testFuel;
}

  
  function holdStatus(arr){
    if (arr.length < 7) {
      return `Spaces available: ${7-arr.length}.`;
    } else if (arr.length > 7){
      return `Over capacity by ${arr.length-7} items.`;
    } else {
      return "Full";
    }
  }

let innocentCargoCheck = function(cargoArray) {
    //i want items at index 4 and index 6
    let pirateHold = ["Fake Gold", "AE-36 unit"];
    pirateHold.push(cargoArray.splice(4, 1, pirateHold.splice(0, 1)));
    pirateHold.push(cargoArray.splice(6, 1, pirateHold.splice(0, 1)));
    return pirateHold;
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];            



console.log("We can take " + harmlessFuelDoubleCheck(fuelLevel) + " litres of fuel!");
console.log("So there is " + fuelLevel + " litres of fuel left and fuel level: " + checkFuel(fuelLevel));
console.log("We'll take: " + innocentCargoCheck(cargoHold) + " out of the cargo hold");
console.log("So the cargo hold is left with: " + cargoHold);
console.log("Hold status: " + holdStatus(cargoHold));
// console.log(cargoHold);
//console.log(typeof pirateHold);
// console.log(typeof cargoHold);
