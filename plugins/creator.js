// Source https://github.com/sadteams/bot-md
const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	conn.p[id] = [
	await conn.sendKontak(m.chat, global.owner, m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
     }}
  })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `Hi cuddh mk itim @${m.sender.split('@')[0]}, මූ තමා මගේ owner, Okay? 😃\nඕන වුනොත් contact කරපන\nDon\t call him or ස්පෑම් 😂`, mentions: [m.sender] }, { quoted: conn.p[id][0]
  })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler
