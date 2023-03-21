const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songReviewSchema = new Schema({
    songTitle: String,
    singer: String,
    source: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    datePosted: Date,
    genre: String,
    reactions: Object,
    review: String
})

const SongReview = mongoose.model("SongReview", songReviewSchema)
module.exports = SongReview