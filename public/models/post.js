class Post {
    constructor(){
        this.songsData = []
    }

    getSongs() {
        return $.get(`songs`).then(songsResults => {
            this.songsData = songsResults
            return this.songsData
        })
    }

    postNewPost(songTitle, artistName, sourceLink, songCategory, songReview) {
        let newSongObject = { 
            titel: songTitle,
            artist: artistName,
            source: sourceLink,
            user: 1, //Just For Now - There Is Just One User ! 
            date_created: new Date(),
            category: songCategory, 
            reactions: {likes: 0, dislikes: 0, wow: 0, angry: 0},
            review: songReview 
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