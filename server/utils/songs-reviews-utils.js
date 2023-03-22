const SongReview = require("../models/SongReview");
const moment = require("moment")

const relevantSongsReviews = function(genre, reactionType) {
    if (genre && reactionType) {
        return songsReviewsSortingAndFiltering(genre, reactionType)
    } else if (genre) {
        return songsReviewsFiltering(genre)
    } else if (reactionType) {
        return songsReviewsSorting(reactionType)
    } else {
        return songsReviews()
    }
}

const songsReviewsfiltering = function(SongsReviews) {
    let songsReviewsfiltering = []
    for (const songReview of SongsReviews) {
        let songReviewfilter = {}
        songReviewfilter._id = songReview._id
        songReviewfilter.songTitle = songReview.songTitle
        songReviewfilter.singer = songReview.singer
        songReviewfilter.source = songReview.source
        songReviewfilter.user = songReview.user.name
        songReviewfilter.datePosted = moment(songReview.datePosted).format('l')
        songReviewfilter.genre = songReview.genre
        songReviewfilter.reactions = songReview.reactions
        songReviewfilter.review = songReview.review

        songsReviewsfiltering.push(songReviewfilter)
    }
    return songsReviewsfiltering
}

const songsReviewsSortingAndFiltering = function(genreName, reactionType) {
    let sortBy = "reactions." + reactionType
    return SongReview.find({ genre: genreName }).populate("user").sort({
        [sortBy]: -1
    })
}

const songsReviewsFiltering = function(genreName) {
    return SongReview.find({ genre: genreName }).populate("user")
}

const songsReviewsSorting = function(reactionType) {
    let sortBy = "reactions." + reactionType
    return SongReview.find({}).populate("user").sort({
        [sortBy]: -1
    })
}

const songsReviews = function() {
    return SongReview.find({}).populate("user")
}

module.exports = { relevantSongsReviews, songsReviewsfiltering };