function reverseCharacters(userInput) {
    if (typeof(userInput) == 'number') {
        console.log('number');
        let newString = userInput.toString();
        let reversedString = newString.split("").reverse().toString().replace(/,/g,"");
        return reversedString;
    } else {
        console.log('string');
        let reversedString = userInput.split("").reverse().toString().replace(/,/g,"");
        return reversedString;
    }
}

function completeReversal(someArray) {
    let reversedArray = someArray.reverse();
    let reallyReversedArray = [];

    for (let i = 0; i < reversedArray.length; i++) {
        let currentItem = reversedArray[i];
        let newItem = reverseCharacters(currentItem);
        reallyReversedArray.push(newItem);
    }
    return reallyReversedArray;
}

let testArray = ['apples', 'oranges', 'kiwi']
console.log(completeReversal(testArray));