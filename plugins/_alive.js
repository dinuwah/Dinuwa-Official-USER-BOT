import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[💖Dinuwa Official²⁰²³💖]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..Dinuwa Official²⁰²³🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *Dinuwa Official²⁰²³*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *Dinuwa Official²⁰²³*
⬡│☂︎           *OWNER:Dinuwa Official²⁰²³*
⬡│☂︎ *wa.me/94740804536*
⬡│☂︎ *Don\'t call owner or you will be*
⬡│☂︎ *Ignored or blocked without*
⬡│☂︎           *warning 🥴😹*
┬│☂︎ *Hehehehe...🤪😸😸*
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .sticker *Image to sticker*
⬡│☂︎ .play *Youtube video/audio*
┬│☂︎ ▁ ▂ ▃ ▅  💖Dinuwa Official²⁰²³💖 ▅ ▃ ▂ ▁
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using 💖Dinuwa Official²⁰²³💖*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
