import { Telegraf } from "telegraf";
import { VOICELIST } from "./voicelist.js";
import 'dotenv/config'

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.on('inline_query', ctx => {
    const result = 
    VOICELIST.map(el=> ({
        id: Math.random().toString(),
        type: 'voice',
        voice_url: el.url,
        title: el.name
    }))

    ctx.answerInlineQuery(result)
})



bot.launch()
process.once('SIGINT', ()=>bot.stop('SIGINT'))
process.once('SIGTERM', ()=>bot.stop('SIGTERM'))