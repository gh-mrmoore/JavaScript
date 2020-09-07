interface Panthera {
    roar: string;
 }
 
 class Tiger implements Panthera {
    roar: string;
 
    constructor() {
       this.roar = 'rooooaaaarrrr';
    }
 }
 
 class Lion implements Panthera {
    roar: string;
 
    constructor() {
       this.roar = 'ROOOOAAAAARRRRRR';
    }
 }
 
 function pantheraSounds(panthera: Panthera) {
    console.log(`Panthera says ${panthera.roar}`);
 }
 
 let tiger = new Tiger();
 let lion = new Lion();
 
 pantheraSounds(tiger);
 pantheraSounds(lion);

 interface AnimalKingdom {animalKingdom: string;}

 interface AnimalPhylum {animalPhylum: string;}

 interface AnimalClass {animalClass: string}

 interface AnimalOrder {animalOrder: string}

 interface AnimalFamily {animalFamily: string}

 interface AnimalGenus {animalGenus: string}

 class AnimalSpecies implements AnimalKingdom, AnimalPhylum, AnimalClass, AnimalOrder, AnimalFamily, AnimalGenus {
    //inherited information
   animalKingdom: string;
   animalPhylum: string;
   animalClass: string
   animalOrder: string
   animalFamily: string
   animalGenus: string

   //class info
   animalSpecies: string;
   animalName: string;

 }