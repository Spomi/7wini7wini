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






client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


 

client.on('message', message => {
var prefix = "+";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
 








client.login(process.env.BOT10_TOKEN);
