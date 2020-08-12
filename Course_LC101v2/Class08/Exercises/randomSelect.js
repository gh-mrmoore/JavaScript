function randomFromArray(arr){
    //Your code here to select a random element from the array passed to the function.
    let randomIndex = Math.floor((Math.random * arr.length()));
    let randomItem = arr[randomIndex];

    return randomItem;
  }
  
  //TODO: Export the randomFromArray function.

  module.exports = randomFromArray;