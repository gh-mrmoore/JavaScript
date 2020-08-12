module.exports = {
    sayHello: function() {
        return "Hello";
    },

    encryptEntry: function(someText) {
        //split my text string in to an array to work with each letter
        let textArray = someText.split('');
        let reverseTextArray = textArray.reverse();
        let passwordString = reverseTextArray.join('');
        return passwordString;

    },

    matchingStringEntries: function(string1, string2) {
        if (string1 === string2) {
            return true;
        } else {
            return false;
        }
    }
}