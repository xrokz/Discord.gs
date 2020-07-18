const api = require("../discord/api");
const TextChannel = require('./TextChannel');
let message;

class Message {

    constructor(message_payload, client) {
        message = message_payload;
        this.id = message.id;
        this.content = message.content;
        this.author = message.author;
        this.channel = new TextChannel(message.channel_id, client);
    }
    
    
}
module.exports = Message;