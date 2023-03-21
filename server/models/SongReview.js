const mongoose = require('mongoose')
const Schema = mongoose.Schema

// reactions is array that have [likes,dislikes,wow,angry] 
const songReviewSchema = new Schema({
    title: String,
    artist: String,
    source: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date_created: Date,
    category: String,
    reactions: Array,
    review: String
})

const SongReview = mongoose.model("SongReview", songReviewSchema)
module.exports = SongReview