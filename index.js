var Discord = require('discord.js');
var http = require('http');
var cats = require('cat-ascii-faces');
var rest = require('restler');
var highroller = require('./highroller.js')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("I'm a high roller\n");
}).listen(8080, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8080/');

var mybot = new Discord.Client();

mybot.on("ready", function() {
    mybot.sendMessage(mybot.getChannel('name', 'general'), 'MY TIME IS HERE.');
});

mybot.on("disconnected", function() {
    mybot.sendMessage(mybot.getChannel('name', 'general'), 'I sleep.');
});

mybot.on("error", function() {
    mybot.sendMessage(mybot.getChannel('name', 'general'), 'I have encountered an unhandled error in your request..');
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
    
    if (message.content === "what") {
        mybot.reply(message, 'Hail Satan.');
    }
    
    if (message.content === "!ping") {
        mybot.reply(message, 'pong');
    }


});

mybot.login("mprestlien@me.com", "mattbot");