const { EmbedBuilder } = require('discord.js');
const { AuditLogEvent } = require('discord.js');

const genEmbed = (msg, executor) => {
    const title = `${msg.content ? 'Message' : 'Embed'} Deleted`;
    const content = msg.content ? msg.content : `Title: ${msg.embeds[0].title}\nDescription:\n${msg.embeds[0].description}`;
    
    return new EmbedBuilder() 
	.setColor(0x0099FF)
	.setTitle(title)
	.setURL(`https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
	.setAuthor({ name: `${msg.author.username}#${msg.author.discriminator}`, iconURL: msg.author.displayAvatarURL()})
	.setDescription(content)
    .addFields(
		{ name: 'Sender', value: `<@${msg.author.id}>`, inline: true},
		{ name: 'Deleted by', value: `<@${executor}>`, inline: true },
		{ name: 'Channel', value: `<#${msg.channel.id}>`, inline: true },
	)
	.setTimestamp()
};

const fetchDeleter = async (msg) => {
    // the code in this function was borrowed from https://stackoverflow.com/questions/53328061/finding-who-deleted-the-message and modified
    await setTimeout(() => null, 1000);
    const fetchedLogs = await msg.guild.fetchAuditLogs({
		limit: 8,
		type: AuditLogEvent.MessageDelete,
	});
    
    const auditEntry = fetchedLogs.entries.find(a =>
        a.target.id === msg.author.id &&
        a.extra.channel.id === msg.channel.id &&
        Date.now() - a.createdTimestamp < 20000
    );
    const executor = auditEntry ? auditEntry.executor.id : msg.author.id;
    return executor;
}

const execute = async (client, msg) => {
    console.log('here');
    const executor = await fetchDeleter(msg);
    const embed = genEmbed(msg, executor)
    client.utilities.log({embeds: [embed]});
}

module.exports = execute;
