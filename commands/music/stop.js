module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có bài nào đang được phát ${message.author}... thử lại đii`);

        queue.destroy();

        message.channel.send(`Đã dừng nhạc, hẹn gặp lại`);
    },
};