
const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client({
	commandPrefix: '#hgw'
});

bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    console.log('System booting....90%');
    bot.user.setGame('Type "#hgw help" for help');
    console.log('Boot success');
    console.log('System online');
});


bot.login(process.env.BOT_TOKEN);