class Post {
    constructor(){
        this.postsData = []
    }

    getPosts() {
        return $.get(`posts`).then(postsResults => {
            this.postsData = postsResults
            return this.postsData
        })
    }

    postNewPost(postText, postSource, postCategory) {
        let postObject = { createdBy : 1, dateCreated: new Date(), text: postText, sourceLink: postSource, category:postCategory}
       
        return $.ajax({
            url: "post",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(postObject),
            success:  (result) => {
                return 

            }
        });

    }


}