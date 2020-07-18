const Discord = require("discord.gs");
const token = "YOURBIGTOKEN";
const client = new Discord.Client(token)

client.on("message", async (message) => {
	if(message.author.bot) return;
	console.log("message sent: ", message.content, " in channel: ", message.channel.name);
	
});

client.run()
