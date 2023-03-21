const mongoose = require('mongoose')
const config = require('../config')
const connectToDB = function() {
    mongoose.connect(config.CONFIG.DB_URL, {
        useNewUrlParser: true,
    }).catch((err) => console.log(err))
}
module.exports = { connectToDB }