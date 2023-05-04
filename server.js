const express = require('express')
const path = require('path')

const app = express()
const reviewApi = require('./server/routes/song-review-api')
const authApi = require('./server/routes/auth')
const DBConnection = require('./server/utils/DBConnection')
const config = require('./server/config')
const options = {
    index: false,
}
app.use(express.static(path.join(__dirname, 'public'), options))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

DBConnection.connectToDB()

app.get('/', (req, res) => {
    res.sendFile('signin.html', {
        root: 'public/',
    })
})

app.use('/', reviewApi)
app.use('/', authApi)

app.listen(config.CONFIG.PORT, function () {
    console.log(`Running on port ${config.CONFIG.PORT}`)
})
