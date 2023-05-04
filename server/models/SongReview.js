const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songReviewSchema = new Schema({
    songTitle: String,
    singer: String,
    source: String,
    user: String,
    datePosted: String,
    genre: String,
    reactions: Object,
    review: String
})

const SongReview = mongoose.model("SongReview", songReviewSchema)
module.exports = SongReview