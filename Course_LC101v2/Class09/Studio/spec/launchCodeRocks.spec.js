const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

    let testingObject = {
        '2': "Launch!",
        '3': "Code!",
        '5': "Rocks!",
        '18': "LaunchCode!",
        '15': "Code Rocks!",
        '10': "Launch Rocks!",
        '30': "LaunchCode Rocks!",
        '13': "Rutabagas! That doesn't work."
    }

    for (item in testingObject) {
        it("When passed a number " + item + " it returns a comment of " + testingObject[item] + "to the user", function() {
            assert.strictEqual(launchOutput(Number(item)), testingObject[item]);
        });
    }

    /*
    it("When passed a number that is ONLY divisible by 2, launchOutput returns 'Launch!'", function() {
        //let outputd2 = launchOutput(2);
        assert.strictEqual(launchOutput(2), "Launch!");
    });

    it("When passed a number that is ONLY divisible by 3, launchOutput returns 'Code!'", function() {
        let outputd3 = launchOutput(3);
        assert.strictEqual(outputd3, "Code!");
    });

    it("When passed a number that is ONLY divisible by 5, launchOutput returns 'Rocks!'", function() {
        let outputd5 = launchOutput(5);
        assert.strictEqual(outputd5, "Rocks!");
    });

    it("When passed a number that is divisible by 2 AND 3, launchOutput returns 'LaunchCode!'", function() {
        let outputd2_3 = launchOutput(18);
        assert.strictEqual(outputd2_3, "LaunchCode!");
    });

    it("When passed a number that is divisible by 3 AND 5, launchOutput returns 'Code Rocks!'", function() {
        let outputd3_5 = launchOutput(15);
        assert.strictEqual(outputd3_5, "Code Rocks!");
    });

    it("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", function() {
        let outputd2_5 = launchOutput(10);
        assert.strictEqual(outputd2_5, "Launch Rocks!");
    });

    it("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", function() {
        let outputd2_3_5 = launchOutput(30);
        assert.strictEqual(outputd2_3_5, "LaunchCode Rocks!");
    });

    it("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", function() {
        let output_not = launchOutput(13);
        assert.strictEqual(output_not, "Rutabagas! That doesn't work.");
    });
*/
});