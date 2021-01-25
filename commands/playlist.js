const distube = require('distube')
module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    
    let queue = await bot.distube.getQueue(message);
      
    
    if (queue) {
    message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }
    else if (!queue) {
        return;
    }
    }




module.exports.config = {
    name: "playlist",
    aliases: ["queue", 'list']
}
