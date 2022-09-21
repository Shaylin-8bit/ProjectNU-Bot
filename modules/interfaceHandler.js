const express = require('express');
require('dotenv').config();

const startInterface = async function (client) {
    const app = express();
    app.get('/', function(req, res) {
        res.send('bot online');
    });

    app.listen(process.env.PORT || 3000, function() {
        console.log(`Interface open on port ${process.env.PORT || 3000}`);
    })
};

module.exports = startInterface;
