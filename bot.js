const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDQ4MTYxMjEyOTkyMDYxNDQ1.DeSRHQ.Ep7ZoVOiQ2GFkKWM5cJ5SoQulik';

client.on('ready', () => {
  console.log('Sunt pregatit!');
  client.user.setStatus("dnd");
  client.user.setGame("Blurple - https://discord.io/blurple")
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'ðŸŽ²-joined');
  if (!channel) return;
  channel.send(`:hugging: *Bun venit pe serverul* ** = Blurple Community = **, ${member}!:
`);
});

client.login('NDQ4MTYxMjEyOTkyMDYxNDQ1.DeSRHQ.Ep7ZoVOiQ2GFkKWM5cJ5SoQulik');

client.on('guildMemberAdd', member => {
    member.guild.channels.get('447852584544501760').setName(`Total-Members: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('447852584544501760').setName(`Total-Members: ${member.guild.memberCount}`);
});
