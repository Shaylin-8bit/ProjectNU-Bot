const partOne = [
    'That looks like a lot of code!',
    'Quiet a bit of programming being shared.',
    'Look at all that code!',
];

const partTwo = [
    'Would you like to share it in a forums post?',
    'Remember you can share on our friendly forums too!',
    'If it seems noteworthy, why not make a forums post?',
];

const execute = (client, msg) => {
    const content = msg.content.split('```')
        .filter((x, index) => (index % 2) && (x.length > (client.config.codeblock_prompt_length || 50)));
    console.log(content);

    if (content.length) {
        const reply = [
            partOne[Math.floor(Math.random() * partOne.length)],
            ' ',
            partTwo[Math.floor(Math.random() * partTwo.length)],
            '\n<https://projectnu.org>',
        ].join('');

        msg.reply({content: reply});
    }
}

module.exports = execute;
