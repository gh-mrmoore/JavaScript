class CrewCandidate {
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  // set count(count) {
  //   this.count++;
  // }

  addScore(newScore) {
    this.scores.push(newScore);
  }

  average(){
    let total = 0
    for(let i=0; i < this.scores.length; i++){
    total += this.scores[i];
    }

    let avg = total/this.scores.length;

    return Number(avg.toFixed(1));
  }

  static get COUNT() {
    return CrewCandidate.COUNT
  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

console.log(CrewCandidate.COUNT);







/*
class CrewCandidate{
  static counter = 0;
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
    this.count = CrewCandidate.counter;
    CrewCandidate.counter++;
  }

  addScore(newScore) {
    this.scores.push(newScore);
  }

  average(){
    let total = 0
    for(let i=0; i < this.scores.length; i++){
    total += this.scores[i];
    }

    let avg = total/this.scores.length;

    return Number(avg.toFixed(1));
  }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);
*/