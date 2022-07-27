const fs = require('node:fs');

const getActions = (client) => {
    const actionDir = './actions';
    const actionFiles = fs.readdirSync(actionDir).filter(file => file.endsWith('.js'));

    for (const file of actionFiles) {
	    const action = require(`.${actionDir}/${file}`);
        const callback = (...args) => {action.execute(client, ...args)}
	    client.on(file.slice(0, -3), callback); 
    }
}

module.exports = getActions;
