const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '='

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`SPACE AGAR.IO`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => { if (message.author.bot) return; if (message.content === prefix + "help") { 		 message.channel.send('**The Message Was Sent On Private**'); 	 		 message.author.sendMessage(` ** __~~ Rooms Moving ~~__ By: Spomi : 9954 

for add The Bot Talke White owner Bot #9954 

#لدعوت البوت المرج التكلم مع المالط 9954

Owner name : Spomi

================================================================== `); } });








client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '668112223490539521').setName("🔊");
client.channels.find('id', '668112223490539521').setName("🔊a");
client.channels.find('id', '668112223490539521').setName("🔊an");
client.channels.find('id', '668112223490539521').setName("🔊ann");
client.channels.find('id', '668112223490539521').setName("🔊anno");
client.channels.find('id', '668112223490539521').setName("🔊annou");
client.channels.find('id', '668112223490539521').setName("🔊announ");
client.channels.find('id', '668112223490539521').setName("🔊announc");
client.channels.find('id', '668112223490539521').setName("🔊announce");
client.channels.find('id', '668112223490539521').setName("🔊announcem");
client.channels.find('id', '668112223490539521').setName("🔊announceme");
client.channels.find('id', '668112223490539521').setName("🔊announcemen");
client.channels.find('id', '668112223490539521').setName("🔊announcement");
client.channels.find('id', '668112223490539521').setName("🔊announcement🕪");
}, 8000);
 
});

 









client.login(process.env.BOT4_TOKEN);
