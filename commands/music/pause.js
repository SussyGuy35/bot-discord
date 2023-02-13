module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Không có bài nào đang được phát ${message.author}... thử lại đii`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Bài hiện tại ${queue.current.title} đã tạm dừng` : `Có lỗi xảy ra ${message.author}... thử lại đii`);
    },
};