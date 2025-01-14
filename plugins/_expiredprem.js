import db from '../lib/database.js'

export async function all(m) {
    let chats = db.data.users[m.sender]
    let prems = db.data.prems
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.sendMessage(m.chat, { text: '[!] Durasi premium anda telah berakhir.', mentions: [m.sender] }, { quoted: m })
        chats.expired = null
        db.data.prems = await prems.filter(v => v.user !== m.sender)
    }
}