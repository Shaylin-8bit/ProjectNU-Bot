const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display help');

const execute = async function(client, interaction) {
    console.log(client.commands)
    await interaction.reply({
        content: `\`\`\`\n${
            client.commands
                .map(
                    command => `${command.data.name}: ${command.data.description}`)
                .join('\n')
            }\`\`\``
    });
};

module.exports = {
    data,
    execute,
};
