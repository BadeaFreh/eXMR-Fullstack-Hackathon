const mongoose = require('mongoose')
const Schema = mongoose.Schema

// reactions is array that have [likes,dislikes,angry,wow] 
const songReviewSchema = new Schema({
    songTitle: String,
    singer: String,
    source: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    datePosted: Date,
    genre: String,
    reactions: Array,
    review: String
})

const SongReview = mongoose.model("SongReview", songReviewSchema)
module.exports = SongReview