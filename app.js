const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings');
const emoticons = require("./emoticons");

client.on('ready',function () {
    console.log('I\'m Online!');
});

client.on('message',function (message) {

    if(message.author.id === client.user.id){return;}
   // console.log(message.content);
    switch (message.content.toLowerCase()){
        case emoticons.said:
            message.channel.send("baba äääääääääh");
            break;
        case "ping":
            message.channel.send("pong");
            break;
        case "deng":
            message.channel.send("Xiao...");
            message.channel.send("PIIIIIINGG!!", {
                file: "http://news.bbc.co.uk/media/images/38576000/jpg/_38576591_dengap238.jpg"
            });
            break;


    }
});

client.login(settings.token);