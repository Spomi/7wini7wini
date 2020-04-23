const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => { if (message.author.bot) return; if (message.content === prefix + "help") { 		 message.channel.send('**The Message Was Sent On Private**'); 	 		 message.author.sendMessage(` ** __~~ Rooms Moving ~~__ By: Spomi : 9954 

for add The Bot Talke White owner Bot #9954 

#لدعوت البوت المرج التكلم مع المالط 9954

Owner name : Spomi

================================================================== `); } });









 









client.login("BOT4_TOKEN");
