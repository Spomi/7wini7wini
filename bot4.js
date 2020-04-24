const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

   
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on('ready', function(){
    var ms = 5000 ;
    var setGame = [`${prefix}help Servers ${client.guilds.size} `,`${prefix}invite Users ${client.users.size}`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/spomi_yt`);
    }, ms);9000

});




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
}, 10000);
 
});




 










client.login(process.env.BOT4_TOKEN);
