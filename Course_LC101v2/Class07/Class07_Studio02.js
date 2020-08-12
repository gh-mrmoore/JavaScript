
// Code your orbitCircumference function here:
function orbitCircumference(radius) {
    let orbitCircumferenceMeasure = Math.PI * (Math.pow(radius, 2));

    return orbitCircumferenceMeasure
}

// Code your missionDuration function here:
function missionDuration(orbitCount, orbitRadius, orbitalSpeed) {
    let totalMissionDuration = (orbitCircumference(orbitRadius) * orbitCount) / orbitalSpeed;

    return totalMissionDuration.toFixed(2);
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry() {
    // let randomNumberArray = [];
    // while (randomNumberArray.length < 3) {
    //   let randomNumberSelected = Math.floor(Math.random() * 6);
    //   let selectedIndexNumber = idNumbers[randomNumberSelected];
    //   if (randomNumberArray.includes(selectedIndexNumber)) {
    //     continue;
    //   } else {
    //     randomNumberArray.push(selectedIndexNumber);
    //   }
    // }
    // return randomNumberArray;
    let randomNumberSelected = Math.floor(Math.random() * 3);

    return randomNumberSelected;
  }

// Code your oxygenExpended function here:
function oxygenExpended(candidateObject) {
    let spaceWalkOrbitCount = 3;
    let spaceWalkDuration = missionDuration(spaceWalkOrbitCount, 2000, 28000);
    let candidateOxygenUsed = candidateObject.o2Used(spaceWalkDuration).toFixed(3);

    return `${candidateObject.name} will walk for ${spaceWalkDuration} and use ${candidateOxygenUsed}.`
}

// Candidate data & crew array.
let candidateA = {'name':'Gordon Shumway', 'species':'alf', 'mass':90, 'o2Used':function(hrs){return 0.035*hrs}, 'astronautID':414};
let candidateB = {'name':'Lassie', 'species':'dog', 'mass':19.1, 'o2Used':function(hrs){return 0.030*hrs}, 'astronautID':503};
let candidateC = {'name':'Jonsey', 'species':'cat', 'mass':3.6, 'o2Used':function(hrs){return 0.022*hrs}, 'astronautID':796};
let candidateD = {'name':'Paddington', 'species':'bear', 'mass':31.8, 'o2Used':function(hrs){return 0.047*hrs}, 'astronautID':291};
let candidateE = {'name':'Pete', 'species':'tortoise', 'mass':417, 'o2Used':function(hrs){return 0.010*hrs}, 'astronautID':599};
let candidateF = {'name':'Hugs', 'species':'ball python', 'mass':2.3, 'o2Used':function(hrs){return 0.018*hrs}, 'astronautID':890};

let idNumbers = [291, 414, 503, 599, 796, 890];
let crew = [candidateA,candidateC,candidateE];
  
console.log(missionDuration(3, 2000, 28000));

console.log(oxygenExpended(crew[selectRandomEntry()]));