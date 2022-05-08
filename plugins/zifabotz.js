let handler = async (m, { conn }) => {
let caption = `*APA OI!!, MANGGIL” GAK JELAS*`

conn.sendButton( m.chat, caption, `©️ JAROTBOTZ`, `Menu`, `.?`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
