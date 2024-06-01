const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "powered by hyper" 


global.devs = "+60175718739" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+60175718739";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "+60175718739";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,+60175718739";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+60175718739,+60175718739";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_11_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsb0xyUG9XNUt4UlRMeWQ0MjB4WkUvSFRpWnpjaFh5cDd2WEo1ZmFGWGtRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYwMTc1NzE4NzM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMjNENEZFNkYyQjlFRTlGRUI3RjU3RjcwNjI0Qzg3Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcyMjIzMDRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYUVTSjViQ0VTaGEtTHB2Y20xT3ZxQVwiLFxuICBcInBob25lSWRcIjogXCI4MzNiZDg0MC1kZDNhLTQ5ZDktOTI0MC1iYThmNTJjNWNkNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgMjM2LFxuICAgICAgNTcsXG4gICAgICA4MyxcbiAgICAgIDEwMixcbiAgICAgIDEwNSxcbiAgICAgIDQxLFxuICAgICAgOCxcbiAgICAgIDM4LFxuICAgICAgMTQsXG4gICAgICAzMCxcbiAgICAgIDE1MyxcbiAgICAgIDE5MyxcbiAgICAgIDEyNyxcbiAgICAgIDE3NSxcbiAgICAgIDkxLFxuICAgICAgMjM4LFxuICAgICAgNDcsXG4gICAgICAxMDIsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE3MyxcbiAgICAgIDE1NyxcbiAgICAgIDE1MSxcbiAgICAgIDE5NixcbiAgICAgIDE4OSxcbiAgICAgIDIxOSxcbiAgICAgIDUzLFxuICAgICAgNSxcbiAgICAgIDEwOCxcbiAgICAgIDIyNCxcbiAgICAgIDEwMyxcbiAgICAgIDY4LFxuICAgICAgMTI2LFxuICAgICAgODQsXG4gICAgICAxNzEsXG4gICAgICAyMTQsXG4gICAgICA1LFxuICAgICAgMzUsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0szWnV2a0RFSmYzNnJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRHVBZGRpQWxMdlVqU0dnc0J6WG5MYUJITzd5TmVIRzlRTUVjejFTajRuUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaRCt4K2p2dU1WUWtEWW1pdXNhcFh1d044OE9nQjk2L0xwdnJGdU1OLzFmUCtFa1I2NGdpc2tLVGx4OWJOM0RtWk00V2dySFdiMjhmVkR4ZnBCMFpDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZL05EcFJKT29VQUdoaXdWTXBraUN6RHF2UnVKV0hPZitGY0Q2UW5yMzIwTUF4WUp4RzBZaWg2ZEFQekZFTDJ6Sk5lMnNRMVM5K0FJY3Vqc0JNNUJnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYwMTc1NzE4NzM5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigKIgREFOWiDigKJcIixcbiAgICBcImxpZFwiOiBcIjI2Mzk4NjM1NjQyMDYyNzo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjAxNzU3MTg3Mzk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyMjIyOTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPMWNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8xYy5qc29uIjogIntcImtleURhdGFcIjpcIm0zUzBveEYwODhvbDNLUlB2aWVlNE9mOVpQRmxTMTlHRmxYVDNQbUY1MkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2MDAyMzQ2OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MjIyMzAyMzE0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ by hyper』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "hyper",
  ownername:process.env.OWNER_NAME|| "It'x hyper",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
