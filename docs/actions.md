Actions should export an `execute` function that excepts a `client` object, followed by any other parameter that would normally be passed.
Their file should be the name of the event they will be called for.

This is the `interactionCreate.js` file:

```javascript
const execute = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.find(x => x.data.name === interaction.commandName);
	
    if (!command) return;

    console.log('');

	try {
		await command.execute(client, interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
}

module.exports = execute;

```
