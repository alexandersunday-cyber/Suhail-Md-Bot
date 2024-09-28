const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349053080211";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_06_06_09_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1sUDRHelVTYnpqbEcxNERJVGYzK1F5bGtDT1d3RlFMbXRuSDFNVjh1QWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVDUy1UekNtVHNpMVBwYXVVc282TEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI1NjU0OGYtOTBlZS00YzEzLWI2YmQtMDc2OGRjNDM3ODk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDQsXG4gICAgICAyNTQsXG4gICAgICA3NSxcbiAgICAgIDMyLFxuICAgICAgMTMxLFxuICAgICAgMjI2LFxuICAgICAgMTMxLFxuICAgICAgMTE4LFxuICAgICAgMjAxLFxuICAgICAgMTgyLFxuICAgICAgMTE4LFxuICAgICAgMTksXG4gICAgICAxNjQsXG4gICAgICAyOCxcbiAgICAgIDcyLFxuICAgICAgMTIxLFxuICAgICAgNjksXG4gICAgICAyNDcsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgODcsXG4gICAgICA1MixcbiAgICAgIDc5LFxuICAgICAgMjEyLFxuICAgICAgNTksXG4gICAgICAxMTcsXG4gICAgICAxMjIsXG4gICAgICAxMixcbiAgICAgIDk4LFxuICAgICAgMTQxLFxuICAgICAgMjQ5LFxuICAgICAgMjcsXG4gICAgICA4MyxcbiAgICAgIDE2NyxcbiAgICAgIDIsXG4gICAgICAyMTEsXG4gICAgICA1NixcbiAgICAgIDM2LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlo2S1BOMkhEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUzMDgwMjExOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMDQzNTA3NzQ5MDEwOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3o3bHEwSEVPMjUzcmNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhRWo0YVAyQ3Mxd2dNMEJxZ0xxRWhWMUtmMUgzeUhzZGtTZFF6NUwyWnpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNnUnpsZWh0azBtL3lxSzNlOEEvWFVTR2U2VWlzL1BtNG9zT1dVcFN0L3J2R2lJeXdOd3J5amo0cVpWczVhYUZtV2pUa3FOd3Qxa2tUeE1xbWozZkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5XbXlRMVpEcmhGN21GSFVLQW1EOHVrbU4rUExTclVxbFUxVit2UVlJbUprYVRJUlhOWHlvYkFqSS9vTnNBRm5Nd0ZWVmVPWWxBUkFxay9Qa3RLOEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTMwODAyMTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzUwMzYwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5BNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkE0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMXhRN0JuY0g3VEZUYWtFY2VRMWMvWkIxRk9FZXJXZm5UQVZPRVAwdVVjTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTczNzk2MzMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc1MDA0NDYwMDhcIn0iCn0=",  //  
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
