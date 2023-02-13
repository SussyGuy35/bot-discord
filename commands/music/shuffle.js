module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có bài nào đang được phát ${message.author}... thử lại đii`);

        if (!queue.tracks[0]) return message.channel.send(`Hết nhạc rồi ${message.author}... thử lại đii`);

        await queue.shuffle();

        return message.channel.send(`Đã trộn **${queue.tracks.length}** bài ! ✅`);
    },
};