//AKASHI
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtTSTdRbXI5TVNpQm1Lb1lRS2JkSnFsL2xVSDZQYWEycDRKa2FqZnNHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3kzQk54QUJKbUNkcG9LT1NmeUU0S3ViYmZVYi9RMDVGQVdzeDE0eW5TYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRkEwT3psakVFS2thUDd4NmtWNTJuNXdmNEMzZHFLeTg0Zm1Ea0ZORTFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQVlliak5OTmxwOHJCV0hvbVBDd0RDYm5UTVZzdEJiK0ZYUzRhKzZ5eGtFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNERFNlMk1yU0t0Mm41alUvYi9udVRxWU8rQnNyWXVpL1ovZTdYcUtERmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNWQmZGdUlldy8zdnRZY1pDWDRwZTZJclpwekd2N2JtY3doOVFzNjRzeEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURwclR3dnZOODVidmJGRWZseG9xT2t1Vm1YZ0FBdERWSkFNNXpWd0tYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3pQZVd3U2p5U1ZhRWxFKzJEMXpGQ1pxTERyT2pDTlo1M21idmlzL2hRVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhGREZpZW95UlpPbE1TVE4rd1Z0eXY3YU5ONzJveVN1Um9peW9pdWRLTGdsRU1CcUVsbUx4RjIyVGUwakdSRnlmQVBaeUFzZkJBcG5IaVVtd2w2OWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6InpkNHN6cnZENkt5SXpLZ2YxOHdYWUJKWmxXNHNTTUZDdkxhcFNLaXArbzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVHa3U0MTdnVGZxNVJoamJiYjNLeUEiLCJwaG9uZUlkIjoiMGU4ZThmZTgtYTQ1OC00ZWQzLWI3NTItMTczMjFmM2E0NDQ2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV5aUZlL3dRMVY4Kzk0eVVEdmN4eEdHaDRHND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMNHlDdExxQkswblF1TW14Uyt0OHVjMVgwUU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjUyR1dSSkIiLCJtZSI6eyJpZCI6IjI0MTA3MDY4MzE2OjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BhbnlZd0hFUGJTckxjR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iml5cXpKK3kwTE4zb29QTUI4ZTIyc3k4UFpyUldDYUErK1ZJNUJFWndMR2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVnNS9uNkRQejNXdTBreXBCSy9oOXVqU1p5WGhkVkJ4WXhUZzZ2WTRzMnR6b3dEcmdMK0xpV3VuN2w5QmsyOThiWm1sR2pUOFdHU0pJWkRqUGVvdUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkOG1SSWEvc1RwQTlBU3VXRUIyQjVqOUI3ak16WVh6OU14YjNwVnN1SVp2cWt0YmdSVFV2bDlyTFA5N0dJYU9IM3h2NWVHQ1BwUFpxZm9ZRGJmVktnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MTA3MDY4MzE2OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXNxc3lmc3RDemQ2S0R6QWZIdHRyTXZEMmEwVmdtZ1B2bFNPUVJHY0N4biJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjY4NzYyMH0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://elision_user:DFDHG0eMtWJY1AG8LxPGYMbUnLxjTl5f@dpg-cr1pqtg8fa8c73ac0mag-a.oregon-postgres.render.com/elision";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "24107068316";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "24107068316";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||"https://telegra.ph/file/6deb3281f66b574e3264e.jpg"
  process.env.IMAGE ||
  "https://telegra.ph/file/6deb3281f66b574e3264e.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/6deb3281f66b574e3264e.jpg,https://telegra.ph/file/6deb3281f66b574e3264e.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©𝘼𝙠𝙖𝙨𝙝𝙞-𝙈𝘿`",
  author: process.env.PACK_AUTHER || "𝘼𝙠𝙖𝙨𝙝𝙞-𝙈𝘿",
  packname: process.env.PACK_NAME || "𝑺𝒂𝒔𝒂𝒌𝒊 𝑨𝒌𝒂𝒔𝒉𝒊",
  botname: process.env.BOT_NAME || "★DOYENNE💜🌻 ÅNDRËA★",
  ownername: process.env.OWNER_NAME || "★DOYENNE💜🌻 ÅNDRËA★",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "teamsasaki1@gmail.com";
global.location = "Africa,france";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/AKASHI-SASAKI/Akashi-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "242067274660";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://sasaki-akashi-session.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
