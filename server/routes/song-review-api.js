const express = require('express')
const router = express.Router()
const SongReview = require('../models/SongReview')

router.get('/songs-reviews', function(req, res) {
    SongReview.find({})
        .then(function(SongsReviews) {
            res.send(SongsReviews)
        }).catch((err) => res.status(500).send({ msg: "Internal server error" }))
})

module.exports = router