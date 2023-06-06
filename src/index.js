const Discord = require('discord.js-selfbot-v13');
const { Client, MessageEmbed } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: true, });
require('dotenv').config();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
if(message.content == '!unban') {
const guild = client.guilds.cache.get('Your Guild ID');
try {

    guild.bans.fetch().then(async (i) => {
        const ids = i.map((u) => u.user.id);
          ids.forEach(async (id) => {
            await guild.members.unban(id, 'Your Reason Here!').then(async (u) => {
                console.log(`Unbanned: ${u.tag}`);
            });
        })
    })

} catch (error) {
    console.error(error);
}

}});

client.login(process.env.TOKEN);
