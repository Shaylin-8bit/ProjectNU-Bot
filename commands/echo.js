const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back')
            .setRequired(true));

const execute = async function(interaction) {
    await interaction.reply(interaction.options.getString('input'));
}

module.exports = {
    data,
    execute 
};
