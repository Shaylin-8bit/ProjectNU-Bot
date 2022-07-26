const {Client, GatewayIntentBits} = require('discord.js');
const secrets = require('./modules/secrets.js');
const getCommands = require('./modules/commandHandler.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async() => {
    await getCommands(client);
    console.log(`logged in as ${client.user}`); 
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
    const command = client.commands.find(x => x.data.name === interaction.commandName);
	
    if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


client.login(secrets.token);
