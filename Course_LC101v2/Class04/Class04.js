// Part 1 code.

//Print the numbers 0 - 20, one number per line.
console.log("part 1.1");
for (let i = 0; i < 21; i++) {
    console.log(i);
}

//Print only the ODD values from 3 - 29, one number per line.
console.log("part 1.2");
for (let x = 3; x < 30; x+=2) {
    console.log(x);
}

// //Print the EVEN numbers 12 to -14 in descending order, one number per line.
console.log("part 1.3");
for (let y = 12; y > -15; y-= 2) {
    console.log(y);
}

// //Print the numbers 50 to 20 in descending order, but only if the numbers are multiples of 3.
console.log("part 1.4");
for (let z = 50; z > 19; z--) {
    if (z % 3 == 0) {
        console.log(z);
    }
}

// Part 2 code.
let lcString = 'LaunchCode';
console.log("part 2.1");

console.log("part 2.2");
let lcStringArray = lcString.split("").reverse();
for (let i = 0; i < lcStringArray.length; i++) {
    console.log(lcStringArray[i]);
}

// Part 3 code.
console.log("part 3.1");
