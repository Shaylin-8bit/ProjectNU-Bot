const {Client} = require('pg');
const fs = require('node:fs');

const getClient = async (client) => {
    const db = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        ssl: {rejectUnauthorized: false},
      });
    await db.connect();
    return db; 
}

const getDatabase = (client) => {
    const DBObject = {};
    const actionDir = './database';
    const actionFiles = fs.readdirSync(actionDir).filter(file => file.endsWith('.js'));

    for (const file of actionFiles) {
	    const execute = require(`.${actionDir}/${file}`);
        const callback = async (...args) => {
            const DB = await getClient();
            const result = await execute(client, DB, ...args);
            await DB.end();
            return result;
        }
	    DBObject[file.slice(0, -3)] = callback; 
    }

    client.database = DBObject;
}

module.exports = getDatabase;
