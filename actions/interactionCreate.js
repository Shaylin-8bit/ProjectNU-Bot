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
