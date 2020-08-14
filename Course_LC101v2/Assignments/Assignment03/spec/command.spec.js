const assert = require('assert');
const Command = require('../command.js');

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    assert.throws(
      function() {
        new Command();
      },
      {
        message: 'Command type required.'
      }
    );
  });

  it("constructor sets command type", function() {
    //create the object needed for the test
    let commandTypeCheck = new Command('mode change');

    //test for equality
    assert.strictEqual(commandTypeCheck.commandType, 'mode change');
  });

  it("constructor sets a value passed in as the 2nd argument", function() {
    //create the object needed for the test
    let valueArg = new Command('mode', 'value');

    //test for equality
    assert.strictEqual(valueArg.value, 'value');
  });

});