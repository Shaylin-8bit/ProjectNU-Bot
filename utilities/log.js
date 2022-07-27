const execute = (client, msg, channelName) => {
    const channel = client.utilities.getChannel(channelName || client.config.logChannel) || client.utilities.getChannel(client.config.logChannel);
    channel.send(msg);
}

module.exports = execute;
