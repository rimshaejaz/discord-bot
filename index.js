/* destructering: importing a set amount of items from the discord package */
/* {what you are importing} */
/* intents are a set of permissions the bot can use in order to get access to a set of events */ 
/* guild == server */
require('dotenv').config();    /*gives access to .env file from anywhere on codebase */
const { Client, IntentsBitField} = require('discord.js');   

/* client class takes in intents object */
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,      /* listen to messages */
        IntentsBitField.Flags.MessageContent,     /* read messages */
    ],
})

/* listens to when the bot is ready */
client.on('ready', (c) => {
    console.log(`🐻 ${c.user.tag} is online.`);
});

/* logs message */
client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    console.log(message.content);
});

/* token is bots password, can always reset token on discord bot */
client.login(process.env.TOKEN);
