const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Rover class", function() {

    //test 7 from assignment
    it("Constructor sets position and default values for mode and generator watts", function() {
        let testRover = new Rover(12345);
        assert.strictEqual(testRover.roverPosition, 12345);
        assert.strictEqual(testRover.roverMode, 'NORMAL');
        assert.strictEqual(testRover.roverGeneratorWatts, 110);
    });

    //test 8 from assignment
    it("response returned by receiveMessage contains name of message", function() {
        let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let message = new Message('Test message with two commands', commands);
        let rover = new Rover(98382);    // Passes 98382 as the rover's position.
        let response = rover.receiveMessage(message);

        assert.strictEqual(response.message, 'Test message with two commands');
    });

    //test 9 from assignment
    it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
        let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let message = new Message('Test message with two commands', commands);
        let rover = new Rover(98382);    // Passes 98382 as the rover's position.
        let response = rover.receiveMessage(message);
        
        assert.strictEqual(response.results.length, 2);
    });

    //test 10 from assignment
    it("responds correctly to status check command", function() {
        //create a command, message, rover and rover response
        let command10 = [new Command('STATUS_CHECK')];
        let message10 = new Message('Test 10 message', command10);
        let rover10 = new Rover(54322);
        let response10 = rover10.receiveMessage(message10);

        //check the response
        assert.deepEqual(response10.results[0], {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 54322}});
    });

    //test 11 from assignment
    it("responds correctly to mode change command", function() {
        //create what i need for my test
        let command11 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1234)];
        let message11 = new Message('Test 11 message', command11);
        let rover11 = new Rover(99999);
        let response11 = rover11.receiveMessage(message11);

        //evaluate my code
        assert.deepEqual(response11.results, [{completed: true}, {completed: false}]);
    });

    //test 12 from assignment

    //test 13 from assignment
});