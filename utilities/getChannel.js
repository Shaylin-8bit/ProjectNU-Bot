const execute = (client, channelName) => client.channels.cache.find(channel => channel.name === channelName);

module.exports = execute;
