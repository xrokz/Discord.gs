const api = require("../discord/api");
const Message = require('./Message');

class TextChannel {
    constructor (channel_id, client) {
        this.id = channel_id;
        var channel;
        api.get(`/channels/${channel_id}`, client.token).then(c => {
            console.log(c.data)
        })
        console.log(channel);
        this.name = channel.name;
        this.type = channel.type;
        this.position = channel.position;
        this.topic = channel.topic;
        this.nsfw = channel.nsfw;
        this.lastMessageID = channel.last_message_id;
        this.parentID = channel.parent_id;
    }
    // this.guild = new Utils.Guild(channel.guild_id);
    

    //Setters


}
module.exports = TextChannel;