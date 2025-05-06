const express = require("express");
const router = express.Router();
const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

router.post("/", function (req, res, next) {
  bot.sendMessage(process.env.TELEGRAM_CHAT_ID, req.body.message);
});

module.exports = router;
