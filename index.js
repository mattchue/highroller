var Discord = require('discord.js');
var http = require('http');
var cats = require('cat-ascii-faces');
var rest = require('restler');
var highroller = require('./highroller.js')

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("I'm a high roller.\n");
});

server.listen(80);

var mybot = new Discord.Client();

mybot.on("ready", function() {
    mybot.sendMessage(mybot.getChannel('name', 'general'), 'I awaken.');
});

mybot.on("message", function (message) {
    
    for (var listener in highroller) {
        highroller[listener](message, mybot);
    }
    
    if (message.content.substring(0, 5) === "!horo") {
        var sunsign = message.content.substring(6, message.content.length);
        var url = 'http://horoscope-api.herokuapp.com/horoscope/today/' + sunsign;

        rest.get(url).on('complete', function (result) {
            if (result instanceof Error) {
                console.log('Error:', result.message);
                this.retry(5000);
            } else {
                mybot.reply(message, result.horoscope);
            }
        });
    }

    if (message.content === "!meow") {
        mybot.reply(message, cats());
    }
    
    if (message.content === "!ping") {
        mybot.reply(message, 'pong');
    }


});

mybot.login("mprestlien@me.com", "mattbot");