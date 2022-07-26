const secrets = require('./secrets.js');
const fs = require('node:fs');
const {REST} = require('@discordjs/rest');
const {Routes} = require('discord.js'); 

const getCommands = async function(client) {
    const commandDir = './commands';
    client.commands = [];
    const commandFiles = fs.readdirSync(commandDir).filter(file => file.endsWith('.js'));
    const rest = new REST({ version: '10' }).setToken(secrets.token);
    
    for (const file of commandFiles) {
	    const command = require(`.${commandDir}/${file}`);
	    client.commands.push(command);
    }

    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(secrets.clientId, secrets.guildId),
            { body: client.commands.map(x => x.data.toJSON()) },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}

module.exports = getCommands;