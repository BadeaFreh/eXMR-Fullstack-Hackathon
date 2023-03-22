const express = require("express");
const router = express.Router();
const SongReview = require("../models/SongReview");
const User = require("../models/User");
const songsReviewsUtils = require("../utils/songs-reviews-utils");

router.get("/songs-reviews", function(req, res) {
    let category = req.query.category
    let reactionType = req.query.reactionType

    songsReviewsUtils.relevantSongsReviews(category, reactionType)
        .then((SongsReviews) => {
            const relevantSongsReviewsArray = songsReviewsUtils.songsReviewsfiltering(SongsReviews)
            res.send(relevantSongsReviewsArray)
        })
        .catch((err) => res.status(500).send({ msg: "Internal server error" }))

});

router.post("/song-review", function(req, res) {
    const songReview = new SongReview(req.body)
    songReview.save()
    res.status(201).send({ "message": "song review created" })
});
router.delete("/song-review/:songReviewID", function(req, res) {
    SongReview.findOneAndRemove({ _id: req.params.songReviewID })
        .then(function(result) {
            res.status(204).send({ "message": "song review removed" });
        });
})

router.post("/userSignUp", function(req, res) {
    const user = new User(req.body)
    user.save()
    res.status(201).send({ "message": "user created" })
})

router.post("/userSignIn", function(req, res) {
    const user = new User(req.body)
        //to do
})

module.exports = router;