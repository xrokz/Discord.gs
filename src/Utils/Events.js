import Utils from './Utilities/Utiler';

class Events{
    constructor(event, client) {
        
            // console.log(event);
            let name = "";
            event.t.toLowerCase().split("_").forEach(p => {
                name+=p[0].toUpperCase()+p.slice(1);
            });
            name = name[0].toLowerCase() + name.slice(1)
            this.event = name;
            this.client = client;
            
            
            // console.log(this.event);
            if(this.event == "ready") {
                this.client.emit("ready", new Utils.Message(this.event.d))
            } else if(this.event == "messageCreate") {
                this.client.emit("message", event.d)
            }
        
    }
    
    
    
}

module.exports = Events;