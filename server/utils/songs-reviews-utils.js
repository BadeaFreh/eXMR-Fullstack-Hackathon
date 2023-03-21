songsFilterByCategory = function(SongsReviews, songCategory) {
    let songsReviewsByCategory = [];
    for (const songReview of SongsReviews) {
        if (songCategory === song._doc.category) {
            songsReviewsByCategory.push(songReview);
        }
    }
    return songsReviewsByCategory;
};
module.exports = { songsFilterByCategory };