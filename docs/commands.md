Slash commands must at the minimum have a name and description under their data and an execute function that accepts `client` and `interaction`.
The file name should match the command name.

```javascript
const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Get bot latency')

const execute = async function(client, interaction) {
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
```