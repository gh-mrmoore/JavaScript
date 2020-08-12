//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
  
// Code findMinValue here:
function findMinValue(someArray) {
    let minValue = someArray[0];
    for (let i = 0; i < someArray.length; i++) {
      if (someArray[i] < minValue) {
        minValue = someArray[i];
      } else {
        minValue = minValue;
      }
    }
    return minValue;
  }
  
  // Code sortArray here:
  function sortArray(newArray) {
    let sortedArray = [];
    while (newArray.length > 0) {
      let newArrayMin = findMinValue(newArray);
      sortedArray.push(newArrayMin);
      newArray.splice(newArray.indexOf(newArrayMin), 1);
    }
    return sortedArray;
  }
  
console.log(findMinValue(nums1));
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));

console.log(sortArray(nums1));
console.log(sortArray(nums2));
console.log(sortArray(nums3));


// Sample arrays for testing:
let nums1a = [5, 10, 2, 42];
let nums2a = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3a = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Sort each array in ascending order.
console.log(nums1a.sort(function(a, b){return a-b}));
console.log(nums2a.sort(function(a, b){return a-b}));
console.log(nums3a.sort(function(a, b){return a-b}));

// Sort each array in descending order.
console.log(nums1a.sort(function(a, b){return b-a}));
console.log(nums2a.sort(function(a, b){return b-a}));
console.log(nums3a.sort(function(a, b){return b-a}));



// Does this sorting method alter the original arrays?
console.log(/* 'Yes' or 'No' */);
