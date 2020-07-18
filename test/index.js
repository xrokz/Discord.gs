const Discord = require("discord.gs");
const token = "NDk3ODIwNzUxMDA5ODA4Mzk4.XxMbtw.Hjnmbye6ilp4x-lDFx-GSYj3bBU";
const client = new Discord.Client(token)

client.on("ready", () => {
	console.log("I AM READYYYYYY !!");
})

client.on("message", async (message) => {
	if(message.author.bot) return;
	console.log("message sent: ", message.content, " in channel: ", message.channel.name);
	
});

client.run()