const mineflayer=require('mineflayer')

const config={
  host:'CatNow.aternos.me',
  port:55518,
  username:'Donas',
  auth:'offline'
}

function startBot(){
  const bot=mineflayer.createBot(config)

  bot.on('login',()=>console.log('Donas conectado'))
  bot.on('spawn',()=>console.log('Bot dentro del servidor'))

  bot.on('end',()=>{
    console.log('Desconectado. Reconectando en 10 segundos...')
    setTimeout(startBot,10000)
  })

  bot.on('kicked',r=>console.log('Kick:',r))
  bot.on('error',e=>console.log(e))
}

startBot()
