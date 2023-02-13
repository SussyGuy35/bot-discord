module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Không có bài nào đang được phát`, ephemeral: true, components: [] });

            int.member.send(`Bạn đã lưu track ${queue.current.title} | ${queue.current.author} từ server ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Tôi đã gửi bạn tên track đã lưu rồi đó`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Không thể nhắn tin cho bạn :((`, ephemeral: true, components: [] });
            });
        }
    }
};