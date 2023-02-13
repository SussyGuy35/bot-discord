const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Không có bài nào đang được phát ${message.author}... thử lại đii`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Ngu à bros ( ͡° ͜ʖ ͡°) ${message.author}... thử lại đii\n*Thử kiểu **5s, 10s, 20 giây, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Thời điểm trên bài hiện tại **${ms(timeToMS, { long: true })}** ✅`);
    },
};