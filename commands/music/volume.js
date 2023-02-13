const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có bài nào đang được phát cả ${message.author}... thử lại đii`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Volume hiện tại là ${queue.volume} 🔊\n*để chỉnh volume nhập một con số hợp lệ giữa **1** và **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Volume như thế sẵn rồi mà ${message.author}... thử lại đii`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Số không hợp lệ. Nhập 1 số hợp lệ giữa **1** và **${maxVol}** ${message.author}... thử lại đii`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Volume đã  được chỉnh thành **${vol}**/**${maxVol}**% 🔊` : `Có lỗi xảy ra ${message.author}... thử lại đi`);
    },
};