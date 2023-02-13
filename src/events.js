player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Bắt đầu phát ${track.title} trong **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Track ${track.title} đã được thêm vào hàng chờ`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Tôi đã tự rời kênh, xóa hàng đợi...');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Không ai trong kênh, rời kênh...');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Hết nhạc rồi, order tiếp đi bro');
});