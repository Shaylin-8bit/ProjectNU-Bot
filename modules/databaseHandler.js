const getDB = require('../database/getDB.js');

const getDatabase = async (client) => {
    const DB = await getDB();
    client.database = {
        DB: DB,
    };
}

module.exports = getDatabase;
