const { SlashCommandBuilder } = require('discord.js');

const data = 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    
    execute: async function(interaction) {
        await interaction.reply(interaction.options.getString('input'));
    }
};
