const fs = require('node:fs');

const getUtilities = (client) => {
    const utilDir = './utilities';
    client.utilities = {};
    const utilFiles = fs.readdirSync(utilDir).filter(file => file.endsWith('.js'));

    for (const file of utilFiles) {
	    const util = require(`.${utilDir}/${file}`);
	    client.utilities[util.name] = util.execute;
    }
}

module.exports = getUtilities;
