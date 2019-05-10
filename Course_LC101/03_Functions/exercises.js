/*
Use the reduce method in combination with the concat method to “flatten” 
an array of arrays into a single array that has all the elements of the 
original arrays.
*/
let arr1 = [[1, 2, 3], [4, 5], [6, 7, 8]];
let arr2 = [];

document.getElementById("array").innerHTML = arr1[0];

const x = (x, y) => { return x * y };
document.getElementById("unit3").innerHTML = x(3, 5);

function joinArray(a, b) {
	a.concat(b);
	return a;
}


function printOut (a, b) {
	console.log("First value is: " + a + " Second value is: " + b);
	var c = a.concat(b);
	console.log("Concatenated value is: " + c);
	return c;
}

console.log("Flattened array1 is: " + arr1.reduce(printOut));

let i = 0;
while (i <= 3) {
	console.log("While loop value is: " + i);
	i++;
}

/*
Write a higher-order function loop that provides something like a for loop 
statement. It takes a value, a test function, an update function, and a body 
function. Each iteration, it first runs the test function on the current loop 
value and stops if that returns false. Then it calls the body function, giving 
it the current value. Finally, it calls the update function to create a new 
value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
*/
function loop (value, test, update, body) {
	for (var x = value; test(x); x = update(x)) {
	//while(test(value)) {
	//if (test(value)) {
	//if (value == 3) {
		//console.log("Loop function value is now: " + update(value));
		body("Loop function value is currently: " + x);
	}
}
	

loop(3, n => n > 0, n => n - 1, console.log);

