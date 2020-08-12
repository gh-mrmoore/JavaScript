/*
Exercises: Exceptions (Part 2)
Test Student Labs
A teacher has created a gradeLabs function that verifies if student programming labs work. This function loops over an array of JavaScript objects that should contain a student property and a runLab method.

The runLab method is expected to be a function containing the student’s code. The runLab function is called, and the result is compared to the expected result. If the actual and expected results don’t match, then the lab is considered a failure.

The gradeLabs function works for the majority of cases. However, what happens if a student named their function incorrectly?

Your tasks:
Copy studentLabs2, shown below, and paste it into the code editor in the lines below studentLabs.
Pass studentLabs2 to the gradeLabs() function.
Run the code and verify that the teacher gets TypeError: lab.runLab is not a function.
Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined. If the exception is thrown, result should be set to the text "Error thrown".

let studentLabs2 = [
   {
      student: 'Blake',
      myCode: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Jessica',
      runLab: function (num) {
         return Math.pow(num, num);
      }
   },
   {
      student: 'Mya',
      runLab: function (num) {
         return num * num;
      }
   }
];

Before You Submit
Have only one call to gradeLabs(studentLabs2);
Be sure your error text matches the case given in the instructions.
*/

function gradeLabs(labs) {
    for (let i=0; i < labs.length; i++) {
        let lab = labs[i];
        try {
            let result = lab.runLab(3) === 27;
            console.log(`${lab.student}'s code worked: ${result}`);
        } catch(TypeError) {
            let result = "Error thrown"
            console.log(`${lab.student}'s code worked: ${result}`);
        }
    }
}

let studentLabs = [
        {
            student: 'Carly',
            runLab: function (num) {
            return Math.pow(num, num);
            }
        },
        {
            student: 'Erica',
            runLab: function (num) {
            return num * num;
            }
        }
    ];

let studentLabs2 = [
        {
            student: 'Blake',
            myCode: function (num) {
            return Math.pow(num, num);
            }
        },
        {
            student: 'Jessica',
            runLab: function (num) {
            return Math.pow(num, num);
            }
        },
        {
            student: 'Mya',
            runLab: function (num) {
            return num * num;
            }
        }
    ];

gradeLabs(studentLabs2);