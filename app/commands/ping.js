const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Botのレイテンシを表示します。',
  execute: async (message) => {
    const sent = await message.channel.send('🏓 Pong...');
    const latency = sent.createdTimestamp - message.createdTimestamp;

    const embed = new EmbedBuilder()
      .setTitle('📶 Pong!')
      .setDescription(`**メッセージレイテンシ:** \`${latency}ms\`\n**APIレイテンシ:** \`${Math.round(message.client.ws.ping)}ms\``)
      .setColor('Blue');

    sent.edit({ content: '✅ 測定完了', embeds: [embed] });
  },
};
