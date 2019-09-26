const WebSocket = require("ws");
module.exports.getWebSocket = () => {
    return new WebSocket('wss://gateway.discord.gg/?v=6&encoding=json');
}