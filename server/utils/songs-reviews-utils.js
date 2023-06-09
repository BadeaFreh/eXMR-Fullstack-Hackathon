const SongReview = require('../models/SongReview')
const moment = require('moment')

const relevantSongsReviews = function (category, reactionType) {
    if (category && reactionType) {
        return songsReviewsSortingAndFiltering(category, reactionType)
    } else if (category) {
        console.log('reached')
        return songsReviewsFiltering(category)
    } else if (reactionType) {
        return songsReviewsSorting(reactionType)
    } else {
        return songsReviews()
    }
}

const songsReviewsfiltering = function (SongsReviews) {
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

const songsReviewsSortingAndFiltering = function (genreName, reactionType) {
    let sortBy = 'reactions.' + reactionType
    return SongReview.find({ genre: genreName })
        .populate('user')
        .sort({
            [sortBy]: -1,
        })
}

const songsReviewsFiltering = function (genreName) {
    return SongReview.find({ genre: genreName }).populate('user')
}

const songsReviewsSorting = function (reactionType) {
    let sortBy = 'reactions.' + reactionType
    return SongReview.find({})
        .populate('user')
        .sort({
            [sortBy]: -1,
        })
}

const songsReviews = async function () {
    const reviews = await SongReview.find({})
    return reviews
}

function formattedDate(date) {
    let year = date.toLocaleString('default', { year: 'numeric' })
    let month = date.toLocaleString('default', { month: '2-digit' })
    let day = date.toLocaleString('default', { day: '2-digit' })
    let formattedDate = year + '-' + month + '-' + day
    return formattedDate
}

const insertData = function (reviews) {
    for (let review of reviews) {
        const songReview = new SongReview({
            songTitle: review.songTitle,
            singer: review.singer,
            source: review.source,
            user: review.user,
            datePosted: formattedDate(review.datePosted),
            genre: review.genre,
            reactions: review.reactions,
            review: review.review,
        })
        songReview.save()
    }
    return SongReview.find({})
}

module.exports = { relevantSongsReviews, songsReviewsfiltering, insertData }
