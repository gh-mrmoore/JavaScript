"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        //method code here
        var totalMass = 0;
        for (var x = 0; x < items.length; x++) {
            totalMass += items[x].massKg;
        }
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        //method code here
        var astronautMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        var rocketMass = astronautMass + cargoMass;
        return rocketMass;
    };
    Rocket.prototype.canAdd = function (item) {
        //method code here
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        //method code here
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //method code here
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
