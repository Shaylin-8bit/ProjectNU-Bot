const fs = require('node:fs');

const getUtilities = (client) => {
    const utilDir = './utilities';
    client.utilities = {};
    const utilFiles = fs.readdirSync(utilDir).filter(file => file.endsWith('.js'));

    for (const file of utilFiles) {
	    const util = require(`.${utilDir}/${file}`);
        const execute = (...args) => util(client, ...args);
	    client.utilities[file.slice(0, -3)] = execute;
    }
}

module.exports = getUtilities;
