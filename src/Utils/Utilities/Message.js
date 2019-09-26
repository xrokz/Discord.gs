import api from "../discord/api";
import Utils from './Utiler';
let message;

class Message {

    constructor(message_payload) {
        message = message_payload;
    }
    
    get id() { return message.id; }
    get content() { return message.content; }
    get author() { return message.author; }
    get channel() { return new Utils.TextChannel(message.channel_id); }
}
module.exports = Message;