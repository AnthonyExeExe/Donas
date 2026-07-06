const mineflayer = require('mineflayer')

const config = {
  host: 'CatNow.aternos.me',
  port: 55518,
  username: 'Donas',
  auth: 'offline'
}

function startBot() {
  const bot = mineflayer.createBot(config)

  console.log('🔄 Iniciando bot...')

  bot.on('login', () => {
    console.log('✅ Login exitoso')
  })

  bot.on('spawn', () => {
    console.log('🎮 Bot dentro del servidor')

    // Anti-AFK simple
    setInterval(() => {
      try {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), 500)
      } catch (e) {}
    }, 30000)
  })

  bot.on('end', () => {
    console.log('❌ Desconectado. Reconectando en 10s...')
    setTimeout(startBot, 10000)
  })

  bot.on('kicked', (reason) => {
    console.log('⚠️ Kick:', reason?.toString?.() || reason)
  })

  bot.on('error', (err) => {
    console.log('❌ Error:', err?.message || err)
  })
}

startBot()
