const commando = require('discord.js-commando');

class FluffyFact extends commando.Command{
    constructor(client){
        super(client, {
            name: 'acer_fact',
            group: 'fun',
            memberName: 'acer_fact',
            description: 'Acer Secret'
        });
    }

    async run(message, args){
        message.say("Acer likes traps!");
    }
}

module.exports = AcerFact;