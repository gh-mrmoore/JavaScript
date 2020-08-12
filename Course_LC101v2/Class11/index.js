/* parent class for this example */
class Canis {
    constructor(kingdom, phylum, animalClass, order, family, genus, species, color) {
        /* putting a small function here accounts for the possibility of not getting data from the user */
        if (!kingdom) { kingdom = "Animalia"; }
        this.kingdom = kingdom; 

        if (!phylum) { phylum = "Chordata"; }
        this.phylum = phylum;

        if (!animalClass) { animalClass = "Mammalia"; }
        this.animalClass = animalClass;

        if(!order) { order = "Carnivora" }
        this.order = order;

        if(!family) { family = "Canidae" }
        this.family = family;

        if(!genus) { genus = "Canis" }
        this.genus = genus;

        if(!species) { species = "Lupus" }
        this.species = species;

        if(!color) { color = 'Gray' }
        this.color = color;

        this.sound = 'howl';
    }
}

class Familiaris extends Canis {
    constructor(goodBoy, color) {
        super();
        this.goodBoy = goodBoy;
        this.sound = 'bark';
        this.species = 'Familiaris';
        this.color = color;         //overriding the parent constructor, what would happen if this wasn't here?
    }
}

//create my objects down here...

/*
examples of the parent class being called
note none of the fields from the child class are included when output
*/
let wolf = new Canis();
let teenWolf = new Canis('white')  //passing in one piece of data to my constructor, but watch where it ends up

/*
examples of the child class being called
note that the child class constructor and super() function are different from the Exercise
this is due to the conditionals in the parent class
*/
let fido = new Familiaris('yes', 'chocolate');  //passing in both expected arguments for the >>child<< constructor
let goodDog = new Familiaris('');               //not passing in any expected arguments for the child constructor

//organize things so I can display them better
let resultsArray = [wolf, teenWolf, fido, goodDog];
let tableColumns = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species', 'Color', 'Sound', 'GoodBoy'];

for(let i = 0; i < resultsArray.length; i++) {
    console.table(resultsArray[i]);
}
