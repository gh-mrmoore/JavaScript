const checkFive = require('../checkFive.js');
const assert = require('assert');

describe("checkFive", function(){

    it("Returns a cogent statement if less than five", function(){
        //code here...
        let output = checkFive(2);
        assert.strictEqual(output, "2 is less than 5.");
    });

});