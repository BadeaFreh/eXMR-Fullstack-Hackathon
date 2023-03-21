class Review {
    constructor(){
        this.songsData = []
    }

    getReviews() {
        return $.get(`songs-reviews`).then(songsResults => {
            this.songsData = songsResults
            return this.songsData
        })
    }

    postNewReview(title, singerName, sourceLink, songCategory, songReview,username) {
        let newSongObject = { 
            songTitle: title ,
            singer:singerName ,
            genre: songCategory , 
            userName: username, //Just For Now - There Is Just One User ! 
            review: songReview,
            reactions: [0,0,0,0],
            datePosted: new Date(),
            source:sourceLink
        }
       
        return $.ajax({
            url: "add", // See It By Server Request ! 
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(newSongObject),
            success:  (result) => {
                return 

            }
        });

    }

}
