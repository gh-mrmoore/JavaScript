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