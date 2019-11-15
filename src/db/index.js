const config = require('./config/index')
const mongoose = require('mongoose')
const fs = require('fs')

mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${config.url}:${config.port}/${config.database}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(e => {
    console.log(e)
  })

mongoose.connection.on('connected', () => {
  console.log(`[Mongoose]: connection open to ${config.url}/${config.database}`)
})
mongoose.connection.on('error', (e) => {
  console.log(`[Mongoose]: connection error: ${e}`)
})
mongoose.connection.on('disconnected', () => {
  console.log('[Mongoose]: connection disconnected')
})

// Controllers
let files = fs.readdirSync(`${__dirname}/services`)
let Controllers = {}
for (let file of files) {
  let filename = file.replace(/\.[^/.]+$/, '')
  let controllerName = `${filename[0].toUpperCase()}${filename.substring(1)}`

  Controllers[controllerName] = require(`${__dirname}/services/${file}`)(mongoose)
}

module.exports = Controllers