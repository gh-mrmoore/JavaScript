let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
function selectRandomEntry() {
  let randomNumberArray = [];
  while (randomNumberArray.length < 3) {
    let randomNumberSelected = Math.floor(Math.random() * 6);
    let selectedIndexNumber = idNumbers[randomNumberSelected];
    if (randomNumberArray.includes(selectedIndexNumber)) {
      continue;
    } else {
      randomNumberArray.push(selectedIndexNumber);
    }
  }
  return randomNumberArray;
}

// Code your buildCrewArray function here:
function buildCrewArray(numberArray, animalCandidateArray) {
  //get my random crew ID selections
  let randomCrewSelected = selectRandomEntry(numberArray);
  let finalCrewObjectsArray = [];
  //console.log(randomCrewSelected);
  
  //cycle thru my objects from my crew ID selections
  for (let i = 0; i < animalCandidateArray.length; i++) {
    //see if the astronautID is in the randomly created array
    if (randomCrewSelected.includes(animalCandidateArray[i].astronautID)) {
      finalCrewObjectsArray.push(animalCandidateArray[i]);
    }
  }
  return finalCrewObjectsArray;
}



// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
//console.log(selectRandomEntry(idNumbers));

let shuttleCrew = buildCrewArray(idNumbers, animals);
console.log(`${shuttleCrew[0].name}, ${shuttleCrew[1].name}, and ${shuttleCrew[2].name} are going to space!`)