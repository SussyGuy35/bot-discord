module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có bài nào đang được phát ${message.author}... thử lại đii`);

        const success = queue.skip();

        return message.channel.send(success ? `Bài hiện tại ${queue.current.title} đã được bỏ qua` : `Có lỗi xảy ra rồi ${message.author}... thử lại đii`);
    },
};