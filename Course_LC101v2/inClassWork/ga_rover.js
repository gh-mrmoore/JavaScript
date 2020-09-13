class Rover {
  constructor(position) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let response = {
      name: message.name,
      //you're going to need to send, possibly, multiple result reponses back...
      results: (message.commands)

      //you might get multiple commands within a message, how can you move thru them?


        //what are you going to do IF you get a STATUS_CHECK?

        //what are you going to do IF you get a MOVE?

        //what are you going to do IF you get a MODE_CHANGE?


        //you have to add your confirmations of completion to your results and send it back...
      
      roverStatus (message.commands) {
        this.mode = mode,
        this.generatorWatts = generatorWatts,
        this.position = position
      }

//  IT SHOULD DO THIS:
//      results: [                          DECLARE AN ARRAY
//        {                                 COMMAND OBJECT
//          completed: true
//        },
//        {                                 COMMAND OBJECT
//          completed: true,
//          roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position:98382 }
//        }
//      ]

    };
    return response;
  }
}

module.exports = Rover;