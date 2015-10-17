var d20 = require('d20');

module.exports = {
    Roll: function (message, bot) {
        if (message.content.substring(0, 5) === "!roll") {
            //TODO catch missing dice parameter
            bot.reply(message, d20.verboseRoll(message.content.substring(6, message.content.length)));
        }
    },
    D4: function (message, bot) {
        if (message.content === "!d4") {
            bot.reply(message, d20.roll(4));
        }
    },
    D6: function (message, bot) {
        if (message.content === "!d6") {
            bot.reply(message, d20.roll(6));
        }

    },
    D8: function (message, bot) {
        if (message.content === "!d8") {
            bot.reply(message, d20.roll(8));
        }
    },
    D10: function (message, bot) {
        if (message.content === "!d10") {
            bot.reply(message, d20.roll(10));
        }
    },
    D12: function (message, bot) {
        if (message.content === "!d12") {
            bot.reply(message, d20.roll(12));
        }
    },
    D20: function (message, bot) {
        if (message.content === "!d20") {
            bot.reply(message, d20.roll(20));
        }
    },
}