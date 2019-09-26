const WebSocket = require('./Utils/WebSocket');
const Events = require("./Utils/Events");
const EventEmitter = require("events");

class Client extends EventEmitter{
    constructor(token) {
        super()
        if(!token) throw Error("DiscordApiError: Incorrect Login Details");
        this.token = token;

    }

    
    

    async run() {
        const ws = WebSocket.getWebSocket();
        var last_sequence = null;

        ws.on("message", async (message) => {
            var packet = JSON.parse(message);
            last_sequence = packet.s;
            if (packet.op == 10) {
            
                // heartbeat
                setInterval(function () {
                    ws.send(JSON.stringify({
                        op: 1,
                        d: last_sequence
                    }))
                }, packet.d.heartbeat_interval);
                
                // identify
                
                ws.send(JSON.stringify({
                    op: 2, 
                    d: {
                        "token": this.token,
                        "properties": {
                        "$os": "linux",
                        "$browser": "my_library",
                        "$device": "my_library"
                        }
                    }
                }))

            }
            if(packet.t !== null) new Events(packet, this);
            // console.log(packet);
            
        })

        
    }

    

}




module.exports = {
    Client: Client
};

