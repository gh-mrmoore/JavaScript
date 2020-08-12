class Message {
    constructor(name, commandArray) {
        this.messageName = name;
        if(!name) {
            throw Error('Name not first parameter');
        }
        this.messageCommandArray = commandArray;
    }
}

module.exports = Message;