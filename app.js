const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings');

client.on('ready',function () {
    console.log('I\'m Online\nI\'m Online');
});

client.on('message',function (message) {
    if(message.content === 'ping'){
        message.reply('pong');
    }
});

client.login(settings.token);