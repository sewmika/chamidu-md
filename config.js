const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01JWkdEbS80c0NLRm5vRHlFMEtzWlpYd1ZJdG5mUWhQNVQxdVk1V0hIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1A1M2d5YytqKzJuZkFwNG5TeEtjSFBQM3RXUHBoTlZ3RE1UUjJoYXZRcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TWcrRzVtUm9oaEkyZlB6Uk5SRFVXb0NKRFUvUCtENkQzdkhCSExGQ1hFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlb0Z1eUEwdHRjNXYwcXN0c2wyWnJhYldRWi9PU1lNTWdmZjJycjJ0WjJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCeVoxRDMrVXFqL3NYcVo2bmw3MkcxSkN1Z1E4TXNyWGxhLzdZT0RUVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRiYStRV0VVMU9wUVJsSUpBem5xU2Z6ZjhSSy82VXd3NVJmYjZDVnhtVDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lkSURDeXZ3dWgrc0pzb3NCMlRqWHNNSHhxTWN2YU5IaUJNU2JmQmQyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRCZHA5d3B2WlRONWNXdWNQN0pZMWRWSTRSWDNQeC80MFFyUnF3OGtYVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAzc1NKZXR0T0lXaWNmNmpWbUdmeHM1SG9yWkZWRzRiSHNFbXErT1h1TFNlei9sWVh2TEVXVnNReXQ2T3NwTmZRTm5zaFQ1bGJkM2Z1S1ptVWJWL2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJRelVxd2Z3TkR5Mmp6b09aWERnNUZFWnVoMGZjaG5FL2NGYzhJcG9uZDRRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTUU01M1IxMyIsIm1lIjp7ImlkIjoiOTQ3NTU4NTQxMTA6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QgvCdkKHwnZCa8J2QpvCdkKLwnZCd8J2QriDwnZCs8J2QnvCdkLDwnZCm8J2QovCdkKTwnZCaIiwibGlkIjoiMjM3NjA2ODM1MDY5MDg2OjI3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG5LbUtNR0VPZTg3TVFHR0JBZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYXZGN0NkNmdOaXU3TFpiTkJtWVA0UzM5a3BaOXE3azhJWHE1NG5kelh5WT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVGt1eUxybHNsSVVHZHJKWktiYjhjR21tT2FwUWpGV21yZjRSQkdPUkJsOGlHL3AreEVCL3Q1R0RkMzM1T0FObU5PVHBjTXZRcVVnZWZNRGVDQjNvREE9PSIsImRldmljZVNpZ25hdHVyZSI6IkZsRTVjaGxCdHFiYkgwOWxmVHM4K3c1V2N5OTlMbm8wQkR5UHgzKzNNcldiMklBaTMxZHZ1UVNlbi9JVjhiZ2dGMU1Ya1k5MnlnaXg0VnNBQUs5K2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTU4NTQxMTA6MjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV3J4ZXduZW9EWXJ1eTJXelFabUQrRXQvWktXZmF1NVBDRjZ1ZUozYzE4bSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0OTk2MzMwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURsaCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY chamidu-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "chamidu-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "chamidu-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*chamidu-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ chamidu-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
