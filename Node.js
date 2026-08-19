// This should be deployed as a Firebase Cloud Function or Vercel API
const TelegramBot = require('node-telegram-bot-api');

const BOT_TOKEN = '8407231882:AAFFyJ_pX-xNX-VmzhI-fCXkWsegjTn7fn8';
const MINIAPP_URL = 'https://virallinks-6a5m.vercel.app/';

const bot = new TelegramBot(BOT_TOKEN);

// Handle /start command
bot.onText(/\/start(?:\s+(.+))?/, (msg, match) => {
    const chatId = msg.chat.id;
    const referralCode = match[1] || ''; // Get referral code after /start
    
    const miniAppUrl = referralCode 
        ? `${MINIAPP_URL}?startapp=${referralCode}`
        : MINIAPP_URL;
    
    const keyboard = {
        inline_keyboard: [[
            {
                text: '🚀 Open Gram Miner',
                web_app: { url: miniAppUrl }
            }
        ]]
    };
    
    bot.sendMessage(chatId, 'Welcome to Gram Miner! Tap below to start mining:', {
        reply_markup: keyboard
    });
});

// Set menu button
bot.setChatMenuButton({
    menu_button: {
        type: 'web_app',
        text: 'Watch Now',
        web_app: { url: MINIAPP_URL }
    }
});
