const { ModalSubmitFields } = require('discord.js');
const {Client} = require('pg');

const getDB = (client) => {
    const db = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        ssl: false,
      });
    return db; 
}

module.exports = getDB;
