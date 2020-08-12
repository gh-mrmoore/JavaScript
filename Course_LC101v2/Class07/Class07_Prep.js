let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"],
    sign: function() {
        return this.name + " is a " + this.species;
    }
 };

 console.log(tortoiseOne.sign());