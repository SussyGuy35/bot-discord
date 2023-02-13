module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có nhạc nào đang được phát ${message.author}... thử lại đii`);

        if (!queue.previousTracks[1]) return message.channel.send(`Không có nhạc nào được phát trước ${message.author}... thử lại dii`);

        await queue.back();

        message.channel.send(`Đang phát **previous**`);
    },
};