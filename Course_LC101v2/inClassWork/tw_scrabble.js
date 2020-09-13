function transform(objectName){
    // intializes the new object.
      let newObject = {};
    
    // loop to iterate through the original object
      for (item in objectName){
        //creates an array of letters for each key
        let  letters = objectName[item];
        
        // case insensativity
    for (let i = 0; i < objectName[item].length; i++) {      //creates an array of letters for each key
                newObject[objectName[item][i].toLowerCase()] = Number(item);
            }
        }
        return newObject;
    }

function getVowelScore(word){ //determines the score with vowels weighted in value.

    let vowelCount = 0;  //initializes the variables used for vowel counting  
    let score = 0;
    let consonates = word.length - vowelCount;
        
        for (i = 0; i <= word.length - 1; i++) {    //for loop to iterate through the word to determine if the vowel count
        
        if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u"){
            vowelCount ++;
        }
        
        consonates = word.length - vowelCount;      //subtracts vowel count from word length the get the number of consonates, determines vowel score, and then total score.
        vowelScore = vowelCount * 3;
        score = consonates + vowelScore;
        }
        
    return score;  //returns the above score.
    }
function getScrabbleScore(word, object){ //determines score based on the new point structure. 
    word = word.toLowerCase();   //case insensativity
    
    let score = 0;  //creates a variable for the score and an array to hold the characters of the word for comparison.
    let wordArray = word.split('');
    
    for (letter in object){   //a for in loop to iterate through the new point structure object.
        if (wordArray.includes(letter)){
        score += Number(object[letter]);
        }
    }
    
    return score;//returns the score based on the newPointStructure.
    }
    // Here is the oldPointStructure object:
const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
 };


 console.log(transform(oldPointStructure));
 console.log(getVowelScore('javascript'));
 console.log(getScrabbleScore('javascript', transform(oldPointStructure)));