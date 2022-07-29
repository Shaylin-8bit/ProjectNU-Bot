require('dotenv').config();

const getConfig = (client) => {
    client.config = {
        clientId: process.env.CLIENT_ID,
        guildId: process.env.GUILD_ID,
        logChannel: 'logs',
        codeblock_prompt_length: 75
    };
};

module.exports = getConfig;
