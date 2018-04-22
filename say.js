const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.RichEmbed()
const prefix = "-"
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith(prefix + "say"))  {
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
     }
 
});
 
client.login('NDIwNjE3MDA1MDA4MTU4NzIw.DYBRoQ.PvaTdBre8WrDCVMyGGVWE00Rggs');
