const mongoose = require('mongoose')
const encrypt = require("mongoose-encryption")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    password: String,
})
const secret = "outlittlesecret."
userSchema.plugin(encrypt, {secret: secret, encryptedFields: ['password']})

const User = mongoose.model("User", userSchema)
module.exports = User