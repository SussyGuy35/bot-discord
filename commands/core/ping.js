const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Nhịp tim gần đây nhất ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} trước **${client.ws.ping}ms**`);
    },
};