const {Client, GatewayIntentBits, Partials} = require('discord.js');

const getConfig = require('./modules/configHandler.js');
const getDatabase = require('./modules/databaseHandler.js');
const getUtilities = require('./modules/utilityHandler.js');
const getActions = require('./modules/actionHandlers.js');
const getCommands = require('./modules/commandHandler.js');

require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', async() => {
    console.log('Getting configurations');
    getConfig(client);
    console.log('Getting database');
    getDatabase(client);
    console.log('Getting utilities');
    getUtilities(client);
    console.log('Getting actions');
    getActions(client);
    console.log('Getting commands')
    await getCommands(client);

    await client.database.clear();

    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`);
    client.utilities.log('Bot started');
});

client.login(process.env.TOKEN);
