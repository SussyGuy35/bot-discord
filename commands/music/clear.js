module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có nhạc nào đang được phát ${message.author}... thử lại đii`);

        if (!queue.tracks[0]) return message.channel.send(`Bài này là bài cuối rồi nhé ${message.author}... thử lại đii`);

        await queue.clear();

        message.channel.send(`Đã xóa hàng đợi 🗑️`);
    },
};