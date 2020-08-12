const assert = require('assert');
const processor = require('../processor.js');

describe("transmission processor", function() {

    it("takes a string and returns an object", function(){
        let result = processor("9701::<489584872710>");
        assert.strictEqual(typeof result, "object");
    });

    it("returns -1 if '::' is not found", function() {
        let result = processor("9701::<489584872710>");
        assert.strictEqual(result, -1);
    });

    it("returns id in object", function() {
        let result = processor("9701::<489584872710>");
        assert.notStrictEqual(result.id, undefined);
    });

    it("converts id to a number", function() {
        let result = processor("9701::<489584872710>");
        assert.strictEqual(result.id, 9701);
    });

});