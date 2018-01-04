const commando = require('discord.js-commando');

class AcerSecret extends commando.Command{
    constructor(client){
        super(client, {
            name: 'acer_secret',
            group: 'fun',
            memberName: 'acer_secret',
            description: 'Acer Secret'
        });
    }

    async run(message, args){
        message.say("Acer likes traps!");
    }
}

module.exports = AcerSecret;