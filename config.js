const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Z2djZDRDIvMXV2UmwrWVRVeURhK1VZRlRkejhwclpneTNpaWU0eVNFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmgvOFZHbXNsR0FLRmJSbU11UENkZE5UYkdtdWJLTVBTaHZPeDhvYlhsRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT2NQdlZmakNMZ3BRMjZOTFZuYXpoaXk4eE1JWWVxdmRDY0c0Q3J2aW5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWWt2eGw1eXR5Ky9WN3F6VFplb1pybUFNZ3J0Yll0ckEvb09BbGNYVXhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJYk5nWjBGUFY2K1MzSUN1eFQrcDBJYmpwdVZveVk3SDhZb0dseWRJV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIrR0Ric3U1QmpKc2xiQW56dFRJMWFYUzhkVUEvYk5UWStNMitRR09yamc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZTZWMvYzd5R1poUzAyTHY0UTJGa3hDa0YzQndNTkt4Rlo0TUdUK0tuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXpNK2hnK1hIQTN2M1VXc2pZOHUvYU1ZVU9HMjBDM3M5RUdGQ2Nkd2ozST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdhZUttRGtDdUYwaW9EQ09jVG1wdGhXSnUrU3pRamVTNlR4NkZUTytsZHgvRXlmZlZjQmdzYlh3YVhRTEkxYzRvbnZ0akRPNHVvQnhXRlRrSXd1aWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6ImZjbE9SWVI5bjVZZ3JJalAxNnBJU0RMQ094VmI1U0dDcTgycVQrbU1CYTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IktTRzFTQ1pMIiwibWUiOnsiaWQiOiI5NDc1NTg1NDExMDoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCC8J2QofCdkJrwnZCm8J2QovCdkJ3wnZCuIPCdkKzwnZCe8J2QsPCdkKbwnZCi8J2QpPCdkJoiLCJsaWQiOiIyMzc2MDY4MzUwNjkwODY6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQckttS01HRVBUYTdNUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhdkY3Q2Q2Z05pdTdMWmJOQm1ZUDRTMzlrcFo5cTdrOElYcTU0bmR6WHlZPSIsImFjY291bnRTaWduYXR1cmUiOiJkWEsvdTZ4UitwZi9aWUZ2eGx3ZmM0bytOOEc5ZlpyUWxsbkp2RzZFV2E2aGlMRXRnOUdVOG9zQU44MlVkQnFaUFVzaForK0tqZW1EdWxMQmhMeEpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic1loVWU1alp4TVZkNVZkMi9IV3p3bWUrQUJsSzhjRDBKTWRIeDMxZmhjSlJ2YU9kdFF4OU9CWm03QTFDdVc0dWJydDlSbkVHMllQek85MkkyWm1GZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NTg1NDExMDoyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXcnhld25lb0RZcnV5Mld6UVptRCtFdC9aS1dmYXU1UENGNnVlSjNjMThtIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUwMDAxODMsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWtWIn0=",
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
