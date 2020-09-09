import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass( items: Payload[] ): number {
        let totalMass: number = 0;
        for (let x = 0; x < items.length; x++) {
            totalMass += items[x].massKg;
        }
        return totalMass;
    }

    currentMassKg(): number {
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        let rocketMass: number = astronautMass + cargoMass;

        return rocketMass;
    }

    canAdd( item: Payload ) {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}