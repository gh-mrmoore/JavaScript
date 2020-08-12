const isPalindrome = require('../palindrome.js');
const assert = require('assert');

describe("isPalindrome", function(){

    //positive test cases
    it("should return true for a single letter", function(){
        assert.strictEqual(isPalindrome("a"), true);
    });

    it("should return true for a single letter repeated", function(){
        assert.strictEqual(isPalindrome("aaa"), true);
    });

    it("should return true for a simple palindrome", function(){
        assert.strictEqual(isPalindrome("aba"), true);
    });

    it("should return true for a longer palindrome", function(){
        assert.strictEqual(isPalindrome("racecar"), true);
    });

    //negative test cases
    it("should return false for a longer non-palindrome", function(){
        assert.strictEqual(isPalindrome("launchcode"), false);
    });

    it("should return false for a simple non-palindrome", function(){
        assert.strictEqual(isPalindrome("ab"), false);
    });

    it("should be case-sensitive", function(){
        assert.strictEqual(isPalindrome("abA"), false);
    });

    it("should consider whitespace", function(){
        assert.strictEqual(isPalindrome("so many dynamos"), false);
    });

    //edge cases
    it("should consider the empty string a palindrome", function(){
        assert.strictEqual(isPalindrome(""), true);
    });

});