var log = function(someVariable) {
    console.log(someVariable);
    return someVariable;
}

var doSomething = function(thing) {
    thing();
}

var sayBigDeal = function() {
    var message = "I’m kind of a big deal";
    log(message);
}

doSomething(sayBigDeal);

//reduce
/*
The reduce() method executes a reducer function (that you provide) 
on each element of the array, resulting in a single output value.
*/
var add = function(a, b) {
    return a + b;
}

var numbers = [1, 3, 5, 7, 9];
var total = numbers.reduce(add, 0);
console.log(total);