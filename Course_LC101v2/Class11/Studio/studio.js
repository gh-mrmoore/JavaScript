class crewCandidate {
    constructor(name, mass, scoreArray) {
        this.candidateName = name;
        this.candidateMass = mass;
        this.candidateScoreArray = scoreArray;
    }
    //class methods
    addNewScore(newScore) {
        this.candidateScoreArray.push(newScore);
    }

    averageScores() {
        let totalScore = 0;
        for (let i = 0; i < this.candidateScoreArray.length; i++) {
            totalScore += this.candidateScoreArray[i];
        }
        return (totalScore / this.candidateScoreArray.length).toFixed(1);
    }

    statusMessage() {
        if (this.averageScores() >= 90) {
            return "Automatically Accepted!";
        } else if (this.averageScores() > 80) {
            return "Reserve!";
        } else if (this.averageScores() > 70) {
            return "Probationary";
        } else {
            return "Not accepted at this time."
        }
    }
}

let bubbaBear = new crewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new crewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new crewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(`Candidate 1 is ${bubbaBear.candidateName}, mass: ${bubbaBear.candidateMass}, scores: ${bubbaBear.candidateScoreArray}`);
console.log(`${bubbaBear.candidateName} took a test and got an 83.`);
bubbaBear.addNewScore(83);
console.log(`${bubbaBear.candidateName} has new scores of ${bubbaBear.candidateScoreArray}`);
console.log(`${bubbaBear.candidateName} has an average score of ${bubbaBear.averageScores()}`);
console.log(`${bubbaBear.candidateName} has a status of: ${bubbaBear.statusMessage()}`);
console.log('');
console.log(`Candidate 2 is ${merryMaltese.candidateName}, mass: ${merryMaltese.candidateMass}, scores: ${merryMaltese.candidateScoreArray}`);
console.log('');
console.log(`Candidate 3 is ${gladGator.candidateName}, mass: ${gladGator.candidateMass}, scores: ${gladGator.candidateScoreArray}`);
console.log(`${gladGator.candidateName} has an average score of ${gladGator.averageScores()}`);
console.log(`${gladGator.candidateName} has a status of: ${gladGator.statusMessage()}`);

let x = 0;
while(gladGator.averageScores() < 80) {
    gladGator.addNewScore(100);
    x += 1;
}
console.log(`It took ${x} tests scoring 100 to reach Reserve status`);