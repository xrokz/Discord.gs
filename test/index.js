const Discord = require("../src/index");
const token = "NTM4MzA3OTE0MzM1NTE4NzIy.XQqR4w._kLucgzUaI4YwO-PNyHP2Y-ve8k";
const client = new Discord.Client(token)
const prefix = "!";

client.on("ready", () => {
	console.log("I AM READYYYYYY !!");
})

client.on("message", async (ctx) => {
	if(ctx.author.bot) return;
	// if(ctx.content.startsWith(prefix + "ping")) {
		console.log(ctx.author.username);
	
	
});

client.run()