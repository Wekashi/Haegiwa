const commando = require('discord.js-commando');

class RainSecret extends commando.Command{
    constructor(client){
        super(client, {
            name: 'rain_secret',
            group: 'fun',
            memberName: 'rain_secret',
            description: 'Rain Secret'
        });
    }

    async run(message, args){
        message.say("Rain is actually gay!");
    }
}

module.exports = RainSecret;
