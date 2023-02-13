module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Không có bài nào ${message.author}... thử lại đii`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Tiếp tục phát ${queue.current.title} ✅` : `Có lỗi xảy ra ${message.author}... thử lại đii`);
    },
};