songsFilter = function (SongsReviews, filter) {
  let newArrSongs = [];
  for (song of SongsReviews) {
    if (filter == song._doc.category) {
      newArrSongs.push(song);
    }
  }
  return [...newArrSongs];
};
module.exports = { songsFilter };
