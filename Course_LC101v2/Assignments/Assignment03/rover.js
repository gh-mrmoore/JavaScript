class Rover {
    constructor(position) {
        //code
        this.roverPosition = position;    //Sets this.position to position where position is a number representing the rover's position.
        this.roverMode = 'NORMAL';        //Sets this.mode to 'NORMAL'
        this.roverGeneratorWatts = 110;   //Sets default value for generatorWatts to 110

        //objects to hold the standard coded responses to various received commands
        this.moveCommandObject = {
            command: 'MOVE',
            value_sent: 'Number representing the position the rover should move to.',
            object_updates: 'position',
            result_returned: {completed: true}
        };

        this.statusCheckCommandObject = {
            command: 'STATUS_CHECK',
            value_sent: 'No values sent with this command.',
            object_updates: 'no updates',
            result_returned: {completed: true, roverStatus: {mode: this.roverMode, generatorWatts: this.roverGeneratorWatts, position: this.roverPosition}}
        };
        
        this.modeChangeCommandObject = {
            command: 'MODE_CHANGE',
            value_sent: 'String representing rover mode (LOW_POWER or NORMAL)',
            object_updates: 'mode',
            result_returned: {completed: true}
        };
    }

    receiveMessage(message) {
        //need to respond with an object, create a blank one to populate
        let responseObject = {};

        //each message has only one name, so assigning it's response is straightforward
        responseObject.message = message.messageName;
        //create an array to add response objects to
        let resultsArray = [];

        //loop thru each command in a single incoming message
        for (let i = 0; i < message.messageCommandArray.length; i++) {
            if (message.messageCommandArray[i].commandType == 'MOVE') {
                if (this.roverMode === 'NORMAL') {
                    this.changePosition(message.messageCommandArray[i].value);
                    resultsArray.push(this.moveCommandObject.result_returned);    
                } else {
                    resultsArray.push({completed: false});
                }
            } else if (message.messageCommandArray[i].commandType == 'STATUS_CHECK') {
                resultsArray.push(this.statusCheckCommandObject.result_returned);
            } else if (message.messageCommandArray[i].commandType == 'MODE_CHANGE') {
                this.changeMode(message.messageCommandArray[i].value);
                resultsArray.push(this.modeChangeCommandObject.result_returned);
            } else {
                console.log('Command not understood');
            }
            // console.log(resultsArray);
            responseObject.results = resultsArray;
        }
        console.log(responseObject);
        return responseObject;
    }

    changePosition(newPosition) {
        this.roverPosition = newPosition;
    }

    changeMode(newMode) {
        //method to change the mode property of the object
        this.roverMode = newMode;
    }
}

module.exports = Rover;