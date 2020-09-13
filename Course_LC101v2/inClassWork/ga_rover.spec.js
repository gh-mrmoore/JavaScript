const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');
const Rover = require('../rover.js');


describe("Rover class", function() {
  
  it("constructor sets position and defaultvalues for mode and generatorWatts", function() {
    let rover = new Rover(98382);
    assert.strictEqual((rover.position, rover.mode, rover.generatorWatts), (98382, 'NORMAL', 110));
  });
  
  it("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382)
    let response = rover.receiveMessage(message);
    assert.strictEqual(response.name, 'Test message with two commands');
  });
  
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382)
    let response = rover.receiveMessage(message);
    assert.strictEqual(response.results.length, message.commands.length);
  });

  it("responds correctly to status check command", function() {
// For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy.
// See the Rover Command Types table for more details.
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command ('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    
    //good work, this is the kind of pattern you'll need to follow through
    assert.strictEqual(rover.generatorWatts, results.roverStatus.generatorWatts);
    assert.strictEqual(rover.mode, results.roverStatus.mode);
    assert.strictEqual(rover.position, results.roverStatus.position);
  });

  // it("responds correctly to mode change command", function() {
  //   assert
  //   );
  // });

  // it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
  //   assert
  //   );
  // });

  // it("responds with position for move command", function() {
  //   assert
  //   );
  // });

});