let testingObject = {
    2: "Launch!",
    3: "Code!",
    5: "Rocks!",
    18: "LaunchCode!",
    15: "Code Rocks!",
    10: "Launch Rocks!",
    30: "LaunchCode Rocks!",
    13: "Rutabagas! That doesn't work."
}

for (item in testingObject) {
    console.log(testingObject[item]);
}


function objectTest (object) {

}




let input = [2, 3, 5, 18, 15, 10, 30, 13];
    let output = ["Launch!",
                            "Code!", 
                            "Rocks!", 
                            "LaunchCode!", 
                            "Code Rocks!", 
                            "Launch Rocks", 
                            "LaunchCode Rocks!", 
                            "Rutabagas! That doesn't work."];

    for (let i = 0; i < input.size; i++) {
        (function (myTest) {
            it("When passed a number " + input[i] + " it returns a response of " + output[i] + " to the user.", function() {
                let funcOutput = launchOutput(input[i]);
                assert.strictEqual(funcOutput, output[i]);
            });
        })
    };