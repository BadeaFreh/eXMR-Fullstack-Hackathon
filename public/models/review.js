 class Review {
    constructor(){
        this.songsData = []
    }

    getReviews(reaction) {
        if(reaction!=0){
            return $.get(`songs-reviews?genre=${reaction}`).then(songsResults => {
                this.songsData = songsResults
                return this.songsData
            })
        }else{
            return $.get(`songs-reviews`).then(songsResults => {
                this.songsData = songsResults
                return this.songsData
            })
        }

        
        
    }

    postNewReview(title, singerName, sourceLink, songCategory, songReview) {
        let newSongObject = {
           songTitle: title,
           singer: singerName,
           source: sourceLink,
           user:"641ab02ad82d7fc05021d419",
           datePosted: "2022/03/03",
           genre:songCategory,
           reactions:{likes:0,dislikes:0,angry:0,wow:0},
           review:songReview
         }
       
        return $.ajax({
            url: "song-review", 
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(newSongObject),
            success:  (result) => {
                return 

            }
        });

    }

}
 