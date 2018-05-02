const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDM5NzE2OTA0MDE0MzE1NTIw.DctK3A.3UR3arCMfTOAXlkMKTQE1iNFoPY'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong.');
  }
});

client.login('NDM5NzE2OTA0MDE0MzE1NTIw.DctK3A.3UR3arCMfTOAXlkMKTQE1iNFoPY');

client.on('message', message => {
if (message.content.toLowerCase().startsWith('-ban')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) return message.channel.send(" **Nu ai acces la aceasta comanda! **:negative_squared_cross_mark:  ");
  if(!member) return message.channel.send("** Ai uitat sa mentionezi tradatorul! :negative_squared_cross_mark: **");
  if(!member.kickable)  return message.channel.send("**Aceasta persoana nu poate fi executata! :negative_squared_cross_mark:** ");
  if(!reason) return message.channel.send("**Ai uitat sa pui motivul pentru ce ii dai ban lui **" + member.tag + " ! :negative_squared_cross_mark: ");
  member.ban(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Ban ${error}**`));
  message.channel.send(`**${member.user.tag}** a fost executat de **${message.author.tag}** Motivul: ${reason} `);
}
})

client.on('message', message => {	
    if(message.content.startsWith('-mass')) {    
	if(message.author.id === "374870632892203010" ||
message.author.id === "374870632892203010"){        
       let args = message.content.split(" ").slice(1);         
	   var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
	if(!args[1]) {  }  
	if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', message => {
if (message.content.toLowerCase().startsWith('-kick')) {
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) return message.reply("**Scuze, dar nu ai acces la aceasta comanda.!**");
  if(!member) return message.reply("**Ai uitat sa mentionezi cui vrei sa ii dai ``Kick`` :tada:**");
  if(!member.kickable)  return message.reply("**Aceasta persoana nu poate fi data afara de pe server!**");
  if(!reason) return message.reply("**Ai uitat sa pui motivul pentru care ii dai Kick lui " + member.tag + " !**");
  member.kick(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Kick din cauza unei erori : ${error}**`));
  message.channel.send(`**${member.user.tag}** a primit ``Kick`` de catre **${message.author.tag}** Motivul: ${reason}`);
}
})

client.on(`message`, msg => {
const memelink = ["https://ccs.infospace.com/ClickHandler.ashx?encp=ld%3d20180325%26app%3d1%26c%3dhandytab1%26s%3dhandytab%26rc%3dhandytab1%26dc%3d%26euip%3d46.102.36.70%26pvaid%3d83cf35c7f5674c269be695eadb7fbb22%26dt%3dDesktop%26fct.uid%3dd20e419b521947d4b84d0c6bff61422f%26en%3dCzTQwdmcejSAFqHdKNxkzRsVGx0kjev63zgK0mGHvVlOVwAyWiSFnb27SoJil3NS%26coi%3d1495%26npp%3d4%26p%3d0%26pp%3d0%26mid%3d9%26ep%3d4%26ru%3dhttp%253a%252f%252fs2.quickmeme.com%252fimg%252f82%252f823dd3c6252d23d7a447f0faa869752c71ab4ce6b87d0084bf227451023a1514.jpg%26du%3dhttp%253a%252f%252fs2.quickmeme.com%252fimg%252f82%252f823dd3c6252d23d7a447f0faa869752c71ab4ce6b87d0084bf227451023a1514.jpg%26hash%3dFDA690852ED8FCD4D7DE167EF80D5F88&ap=4&cop=main-title&om_userid=rKl8DTHxCFlzwWQwICny&om_sessionid=kBbnlweNvlU0rKIjB9fh&om_pageid=RBrVTVHgWX9gEebMC0Mg","http://ragete.com/wp-content/uploads/2013/06/MemeCenter_1372003474921_942.jpg","http://zutv.ro/uploads/image/Vescan-Florin-Ristei-Las-o.jpg","http://www.quickmeme.com/img/ab/ab1bc85050277628da93db3f119db133ffc09d1020f29e5905b40500879b03b6.jpg","https://tse4.mm.bing.net/th?id=OIP.4GRoakNX3SxTbv9y7qh4pQHaEL&pid=15.1&P=0&w=275&h=156","https://d.wattpad.com/story_parts/136/images/143aefc9d6a5aff3.jpg","https://www.sugubat.ro/uploads/2016/07/imagini-amuzante-poze-haioase-dani-mocanu-eu-sunt-omul-cu-1000-de-fete-cheloo-si-toate-de-prost.jpg","http://zutv.ro/uploads/image/mafiot/11935593_730142783757112_7450246232669986699_n.png"];
if (msg.content.startsWith(`-memes`)) {
   msg.channel.send({file: memelink[Math.floor(Math.random() * memelink.length)]}).catch(err => {console.log(err)})
}
})

client.on('message', message => {
  if (message.content === '-avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', msg => {
  if (msg.content === '-invite') {
    msg.channel.send(`Invite **AnoBot** https://discordapp.com/api/oauth2/authorize?client_id=439716904014315520&permissions=8&scope=bot :tada:`);
  }
});

client.on('message', msg => {
  if (msg.content === '-servers') {
    msg.channel.send(' ``Servere Speciale`` , \n\ **:one: Gaming - Romania :link: https://discord.gg/VksqgM9  \n\  :two: Warth Community :beginner: https://discord.gg/zu7ZxKG \n\ :three: Red-Army - https://discord.gg/zvhjnYh :tada:** ` Nu uita sa intrii aici! `');
  }
});

client.on('ready', () => {
  client.user.setGame('AnoBot (-help) ', 'https://www.twitch.tv/streamerhouse')
})

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.channel.send('*** [♕] Comenzi ``AnoBot``,   \n\  =========[♕]==========   \n\ [🐼] -help ```comenzile bot-ului``` \n\ [🐼] -infoserver ```Info-ul despre server!``` \n\ [🐼] -avatar ```vezi avatarul tau``` \n\ [🐼] -memes ```meme-urile bot-ului``` \n\ [🐼] -servers ```Servere Speciale``` \n\ [🐼] -invite ```invite-ul botului``` \n\ [♛] Comenzi Admnini [♛]  \n\   =========[♕]==========   \n\ [🐼] -kick ```Da afara un membru``` \n\ [🐼] -ban ```Baneaza un membru```*** :beginner:');
  }
});

client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Safe-Member");
    member.addRole(role).catch(console.error);
});

client.on('message', message => { 

    if (message.content.startsWith(PREFIX + 'Userinfo')) {

        const UserInfo = new Discord.MessageEmbed()


            .setAuthor(message.author.username, message.author.avatarURL()) 
            .setTitle('UserInfo')
            .setURL('www.google.com') 
            .setColor('#ff0000M') 
            .setImage(message.author.avatarURL()) 
            .setThumbnail(message.author.avatarURL()) 


            .addField('Avatar', message.author.avatar, true) 
            .addField('AvatarURL', message.author.avatarURL({
                format: 'png'
            }), true)
            .addField('AvatarURL', message.author.avatarURL({
                size: '2048'
            }), true)
            .addField('Bot', message.author.bot, true) 
            .addField('Created At', message.author.createdAt, false)
            .addField('Discrim', message.author.discriminator, true) 
            .addField('DMChannel', message.author.dmChannel)
            .addField('ID', message.author.id) 
            .addField('Last Message', message.author.lastMessage)
            .addField('Last Message ID', message.author.lastMessageID) 
            .addField('Presence', message.author.presence) 
            .addField('Presence Status', message.author.presence.status) 
            .addField('Presence Game', message.author.presence.activity.name) 
            .addField('Tag', message.author.tag) 
            .addField('Username', message.author.username)
            .addField('Nick Name', message.guild.member(target).displayName) 

            .setFooter('Requested By', message.author.tag) 
            .setTimestamp() 

        message.channel.send(UserInfo);
    }
});
