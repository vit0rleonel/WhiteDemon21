module.exports = (bot) => {
bot.onReactionAdd();
bot.onReactionRemove();
bot.onLeave();
bot.onJoin();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onBanAdd();
bot.onTypingStart();
bot.onRateLimit();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onVoiceStateUpdate();
bot.onRoleUpdate();
bot.onMemberUpdate();
bot.onRoleDelete();
bot.onRoleCreate();
bot.onBanRemove();
bot.onMessageUpdate();
bot.onPresenceUpdate();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onGuildUpdate();
bot.onEmojiCreate();
bot.onEmojiUpdate();
bot.onEmojiDelete();
bot.onReactionRemoveAll();
bot.onReactionRemoveEmoji();
bot.onMessageDeleteBulk();
bot.onWebhookUpdate();
bot.onChannelPinsUpdate();
bot.onVariableCreate();
bot.onVariableUpdate();
bot.onVariableDelete();
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate();;
bot.onApplicationCmdDelete();
bot.onStickerCreate();
bot.onStickerUpdate();
bot.onStickerDelete();
bot.onThreadCreate();
bot.onThreadUpdate();
bot.onThreadDelete();
bot.onThreadListSync();
}
