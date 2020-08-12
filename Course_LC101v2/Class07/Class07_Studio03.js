// Code your crewMass function here:
function crewMass(crewArray) {
    let totalCrewMass = 0;
    for (let i = 0; i < crewArray.length; i++) {
      totalCrewMass += crewArray[i].mass;
    }
    return totalCrewMass;
  }
  
  // Code your fuelRequired function here:
  function fuelRequired(crewArray) {
    let uncrewedMass = 75000;
    let crewedMass = uncrewedMass + crewMass(crewArray);
    let totalFuel = crewedMass * 9.5;
    
    for (let i = 0; i < crewArray.length; i++) {
      if (crewArray[i].species == 'dog' || crewArray[i].species == 'cat') {
        totalFuel += 200;
      } else {
        totalFuel += 100;
      }
    }
    return totalFuel;
  }
  
  // The pre-selected crew is in the array at the end of this file.
  // Feel free to add, remove, or switch crew members as you see fit.
  
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
  
  let crew = [candidateB,candidateD,candidateF];
  console.log(crewMass(crew));
  console.log(fuelRequired(crew));