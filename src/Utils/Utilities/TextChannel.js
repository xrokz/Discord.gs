import api from "../discord/api";
import Utils from './Utiler';

let channel;
class TextChannel {
    constructor (channel_id) {
        this.id = channel_id;
        channel = api.get(`/channels/${channel_id}`)
    }

    //Getters

    get name() { return channel.name;}
    get type() { return channel.type;}
    get position() { return channel.position;}
    get topic() { return channel.topic;}
    get nsfw() { return channel.nsfw;}
    get lastMessageID() { return channel.last_message_id;}
    get parentID() { return channel.parent_id;}
    // get guild() { return new Utils.Guild(channel.guild_id);}
    

    //Setters


}

module.exports = TextChannel;