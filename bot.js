const Discord = require("discord.js');
const client = new Discord.client();

client.on('ready', () => (
    console.log(*I am ready:L*);
}));

client.on('message', message => (
    if (message.content === 'ping') (
      message.reply("ping"):
    )
});
// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
