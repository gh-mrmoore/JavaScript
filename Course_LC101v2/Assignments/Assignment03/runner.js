const Command = require('./command.js');
const Message = require('./message.js');
const Rover = require('./rover.js');

// let commands = [new Command('MOVE', 12345), new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with three commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);

// // console.log(response);
// // console.log('');
// // console.log(rover);

// let command10 = [new Command('STATUS_CHECK')];
// let message10 = new Message('Test 10 message', command10);
// let rover10 = new Rover(54322);
// let response10 = rover10.receiveMessage(message10);

// console.log(response10);

let command11 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1234)];
let message11 = new Message('Test 11 message', command11);
let rover11 = new Rover(99999);
let response11 = rover11.receiveMessage(message11);

console.log(response11);