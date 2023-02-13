const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không nhạc nào đang được phát ${message.author}... thử lại đi`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Bạn phải tắt nhạc trước (${client.config.app.px}loop) ${message.author}... thử lại dii`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** hàng chờ sẽ được phát mãi` : `Có lỗi xảy ra ${message.author}... thử lại dii`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Bạn phải tắt loop mode trước (${client.config.app.px}loop queue) ${message.author}... thử lại đii`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'tắt' : 'bật'}** bài hiện tại sẽ được lặp lại (bạn có thể lặp cả hàng chờ với tùy chọn <queue>)` : `Có lỗi xảy ra ${message.author}... thử lại đii`);
        };
    },
};