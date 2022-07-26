const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Get bot latency')

const execute = async function(interaction) {
    const response = await interaction.reply({
        content: 'Pong!',
        fetchReply: true
    });
    const time = response.createdTimestamp - interaction.createdTimestamp;
    interaction.editReply(`Pong! ${time}ms`);
}

module.exports = {
    data,
    execute 
};
