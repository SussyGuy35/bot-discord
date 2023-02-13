module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có bài nào ${message.author}... thử lại đii`);

        message.author.send(`Đã lưu track ${queue.current.title} | ${queue.current.author} từ server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Tôi đã gửi bạn tên track đã lưu rồi đó`);
        }).catch(error => {
            message.channel.send(`Không gửi tin nhắn cho bạn được ${message.author}... thử lại đii`);
        });
    },
};