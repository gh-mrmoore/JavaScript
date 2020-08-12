const input = require('readline-sync');

// Initialize variables to store the arrays.
singleMealArray = [];
mealsArray = [];
proteinArray = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
grainArray = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
veggieArray = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
beverageArray = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
dessertArray = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

let mealNumber = "";
while (mealNumber == "" || isNaN(mealNumber)) {
    mealNumber = Number(input.question("How many meals? "));
}

for (i=0; i < mealNumber; i++) {
    singleMealArray.push(proteinArray[i], grainArray[i], veggieArray[i], beverageArray[i], dessertArray[i]);
    //console.log(singleMealArray);
    mealsArray.push(singleMealArray);
    singleMealArray = [];
    }
    console.log(mealsArray);

// Meal assembly and output.