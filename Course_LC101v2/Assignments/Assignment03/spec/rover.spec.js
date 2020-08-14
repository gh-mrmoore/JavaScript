const assert = require('assert');
const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Rover class", function() {

    //test 7 from assignment
    it("Constructor sets position and default values for mode and generator watts", function() {
        let rover06 = new Rover(12345);
        assert.strictEqual(rover06.roverPosition, 12345);
        assert.strictEqual(rover06.roverMode, 'NORMAL');
        assert.strictEqual(rover06.roverGeneratorWatts, 110);
    });

    //test 8 from assignment
    it("response returned by receiveMessage contains name of message", function() {
        let command08 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let message08 = new Message('Test message with two commands', command08);
        let rover08 = new Rover(98382);    // Passes 98382 as the rover's position.
        let response08 = rover08.receiveMessage(message08);

        assert.strictEqual(response08.message, 'Test message with two commands');
    });

    //test 9 from assignment
    it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
        let command09 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let message09 = new Message('Test message with two commands', command09);
        let rover09 = new Rover(98382);    // Passes 98382 as the rover's position.
        let response09 = rover09.receiveMessage(message09);
        
        assert.strictEqual(response09.results.length, 2);
    });

    //test 10 from assignment
    it("responds correctly to status check command", function() {
        //create a command, message, rover and rover response
        let command10 = [new Command('STATUS_CHECK')];
        let message10 = new Message('Test 10 message', command10);
        let rover10 = new Rover(54322);
        let response10 = rover10.receiveMessage(message10);

        //check the response
        assert.deepStrictEqual(response10.results[0], {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 54322}});
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
    it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
        //create what i need for my test
        let command12 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1234)];
        let message12 = new Message('Test 12 message', command12);
        let rover12 = new Rover(99999);
        let response12 = rover12.receiveMessage(message12);

        //evaluate my code
        assert.deepEqual(response12.results, [{completed: true}, {completed: false}]);
    })

    //test 13 from assignment
    it("responds with position for move command", function() {
        //create what i need for my test
        let command13 = [new Command('MOVE', 1234)];
        let message13 = new Message('Test 13 message', command13);
        let rover13 = new Rover(99999);
        let response13 = rover13.receiveMessage(message13);

        //evaluate my code
        assert.deepEqual(response13.results, [{completed: true}]);
        
    })
});