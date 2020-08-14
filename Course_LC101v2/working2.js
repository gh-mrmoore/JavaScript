// Code parts 1 - 3 here:
class CrewCandidate{
    constructor(name, mass, scores){
      this.name = name;
      this.mass = mass;
      this.scores = scores;
      this.status = function () {
        let status = ""
        if (this.average() >= 90 ){
          status = "Accepted"
          return status
        }
        else if (this.average() <= 89 && this.average() >= 80){
          status = "Reserve"
          return status      }
        else if (this.average() <= 79 && this.average() >= 70){
          status = "Probationary"
          return status      
        }
        else if (this.average() < 70){
          status = "Rejected"
          return status      
          
        }
      }
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
  
  // bubbaBear.addScore(83);
  // console.log(bubbaBear);
  
  // console.log(merryMaltese.average());
  
  // Code part 4 here:
  while (gladGator.average() < 80){
    gladGator.addScore(90);
  }
  
  console.log(gladGator.status());