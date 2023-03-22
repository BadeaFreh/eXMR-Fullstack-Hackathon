const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    songsReviews: [{ type: Schema.Types.ObjectId, ref: 'SongReview' }]
})

const User = mongoose.model("User", userSchema)
module.exports = User