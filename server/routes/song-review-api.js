const express = require("express");
const router = express.Router();
const SongReview = require("../models/SongReview");

router.get("/songs-reviews", function (req, res) {
  SongReview.find({})
    .then(function (SongsReviews) {
      res.send(SongsReviews);
    })
    .catch((err) => res.status(500).send({ msg: "Internal server error" }));
});
router.post("/songs-reviews", function (req, res) {
  const newPost = new SongReview({
    title: req.body.title,
    artist: req.body.artist,
    source: req.body.source,
    user: req.body.user,
    date_created: req.body.date_created,
    category: req.body.category,
    reactions: {
      likes: req.body.reactions[0],
      dislikes: req.body.reactions[1],
      wow: req.body.reactions[2],
      angry: req.body.reactions[3],
    },
    review: req.body.review,
  });
  console.log(newPost);
  newPost.save();
  res.send(`the post that created by  ${newPost.createdBy} is saved`);
});
router.delete("/post/:postID", function (req, res) {
  SongReview.findOneAndRemove({ _id: req.params.postID }).then(function (
    result
  ) {
    res.send(`the post deleted`);
  });
});

module.exports = router;
