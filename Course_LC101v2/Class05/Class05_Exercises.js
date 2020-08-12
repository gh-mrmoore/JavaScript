//from the reading
function reverse(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
     reversed = str[i] + reversed;
  }

  return reversed;
}

// Write your makeLine function here:
function makeLine(size) {
    let lineString = "";
    for (let i=0; i < size; i++) {
      lineString = lineString + "#";
    }
    return lineString;
  }

// Write your makeSquare function here:
function makeSquare(size) {
    //let squareString = ""
    // for (let i=0; i < size; i++) {
    //     squareString = squareString + makeLine(size) + "\n";
    // }
    let squareString = makeRectangle(size, size);
    return squareString;
}
  
// Write your makeRectangle function here:
function makeRectangle(height, width) {
  let rectangleString = ""
  for (let i=0; i < height; i++) {
    rectangleString += makeLine(width) + "\n";
  }
  return rectangleString;
}

function makeDownwardStairs(height) {
  let stairString = "";
  for (let i = 0; i <= height; i++) {
    stairString = stairString + makeLine(i) + "\n";
  }
  return stairString;
}

function makeSpaceLine(numSpaces, numChars) {
  let spacesString = "";
  for (let x = 0; x < numSpaces; x++) {
    spacesString += "_";
  }
  let characterString = "";
  for (let i = 0; i < numChars; i++) {
    characterString += "#";
  }
  let spaceLineString = spacesString + characterString + spacesString;
  return spaceLineString;
}

function makeIsoscelesTriangle(height) {
  let triangleString = "";
  for (let i = 0; i < height; i++) {
    if (i < height-1) {
      triangleString = triangleString + makeSpaceLine(height - i - 1, 2*i+1) + "\n";
    } else {
      triangleString = triangleString + makeSpaceLine(height - i - 1, 2*i+1);
    }
    
  }
  return triangleString;
}

function makeDiamond(height) {
  let diamondString = "";

  diamondString = diamondString + makeIsoscelesTriangle(height) + "\n" + reverse(makeIsoscelesTriangle(height));

  return diamondString;
}

//output
//console.log(makeLine(5));
//console.log(makeSquare(5));
//console.log(" ");
//console.log(makeRectangle(3, 5));
//console.log(" ");
//console.log(makeDownwardStairs(5));
//console.log(makeSpaceLine(3, 5));
console.log(makeIsoscelesTriangle(5));
console.log(" ");
console.log(" ");
console.log(makeDiamond(5));