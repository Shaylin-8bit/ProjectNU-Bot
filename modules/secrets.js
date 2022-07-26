require('dotenv').config();

const secrets = {
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
    token: process.env.TOKEN,
};

module.exports = secrets;
