const commando = require('discord.js-commando');

class Say extends commando.Command{
    constructor(client){
        super(client, {
            name: 'say',
            group: 'fun',
            memberName: 'say',
            description: 'Make the bot say something with the text provided. Your command is auto delete afterward.',
            examples: ['#hgw say Hi there!'],
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string'
                }
            ]
        });
    }

    async run(message, { text }){
        message.delete();
        return message.say(text);
    }
}

module.exports = Say;