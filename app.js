const {Client, GatewayIntentBits} = require('discord.js');
const getConfig = require('./modules/configHandler.js');
const getCommands = require('./modules/commandHandler.js');
const getUtilities = require('./modules/utilityHandler.js');
const getActions = require('./modules/actionHandlers.js');

require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async() => {
    getConfig(client);
    getUtilities(client);
    getActions(client);
    await getCommands(client);
    
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`); 
});

client.login(process.env.TOKEN);
