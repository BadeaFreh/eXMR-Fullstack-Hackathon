const express = require('express')
const path = require('path')
const app = express()
const api = require('./server/routes/song-review-api')
const DBConnection = require('./server/utils/DBConnection')
const config = require('./server/config')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

DBConnection.connectToDB()

app.use('/', api)

app.listen(config.CONFIG.PORT, function() {
    console.log(`Running on port ${config.CONFIG.PORT}`)
})