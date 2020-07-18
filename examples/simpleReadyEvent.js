const Discord = require("discord.gs");
const token = "YOURBIGTOKEN";
const client = new Discord.Client(token)

client.on("ready", () => {
	console.log("I AM READYYYYYY !!");
})

client.run()