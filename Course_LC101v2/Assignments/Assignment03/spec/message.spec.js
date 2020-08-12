const assert = require('assert');
const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

    //test 4 from assignment
    it("Throws an error if a name is NOT passed in to the constructor as the first parameter", function() {
        assert.throws(
            function() {
                new Message();
            },
            {
                message: 'Name not first parameter'
            }
        );
    });

    //test 5 from assignment
    it("Constructor sets name", function() {
        new Message('Message text');
    });

    //test 6 from assignment
    it("contains a commands array passed into the constructor as 2nd argument", function() {
        //create a commands array
        let commandArray = [];
        //fill it with some command objects
        let command01 = new Command('type', 'value');
        let command02 = new Command('type2', 'value2');
        //pass the array in to the Message constructor
        commandArray.push(command01);
        commandArray.push(command02);

        new Message('test message', commandArray);
    });
});