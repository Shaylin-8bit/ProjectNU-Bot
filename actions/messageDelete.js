const { EmbedBuilder } = require('discord.js');

const genEmbed = (msg) => new EmbedBuilder() 
	.setColor(0x0099FF)
	.setTitle(`Message deleted in ${msg.channel.name}`)
	.setURL(`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
	.setAuthor({ name: `${msg.author.username}#${msg.author.discriminator}`, iconURL: msg.author.displayAvatarURL()})
	.setDescription(msg.content)
	.setTimestamp()

const execute = (client, msg) => {
    const embed = genEmbed(msg)
    client.utilities.log({embeds: [embed]});
}

module.exports = execute;
