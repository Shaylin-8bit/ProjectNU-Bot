require('dotenv').config();

const getConfig = (client) => {
    client.config = {
        clientId: process.env.CLIENT_ID,
        guildId: process.env.GUILD_ID,
    };
};

module.exports = getConfig;
