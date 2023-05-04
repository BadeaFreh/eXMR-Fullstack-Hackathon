const express = require('express')
const router = express.Router()
const SongReview = require('../models/SongReview')
const User = require('../models/User')
const songsReviewsUtils = require('../utils/songs-reviews-utils')
// const songsReviewsData = require('../data/dummy-data')
const { ObjectId } = require('bson')

router.get('/songs-reviews', function (req, res) {
    let category = req.query.category
    let reactionType = req.query.reactionType
    // songsReviewsUtils.insertData(songsReviewsData)
    songsReviewsUtils
        .relevantSongsReviews(category, reactionType)
        .then((SongsReviews) => {
            res.send(SongsReviews)
        })
        .catch((err) => res.status(500).send({ msg: 'Internal server error' }))
})

router.post('/song-review', function (req, res) {
    const songReview = new SongReview(req.body)
    songReview.save()
    res.status(201).send({ message: 'song review created' })
})

router.put('/song-review/:songReviewID', function (req, res) {
    let songReviewID = req.params.songReviewID
    const updatedSongReview = req.body
    SongReview.findByIdAndUpdate(songReviewID, updatedSongReview).then(
        function (result) {
            res.send({ message: 'song review updated' })
        }
    )
})

router.delete('/song-review/:songReviewID', function (req, res) {
    SongReview.findOneAndRemove({ _id: req.params.songReviewID }).then(
        function (result) {
            res.status(204).send({ message: 'song review removed' })
        }
    )
})

module.exports = router
