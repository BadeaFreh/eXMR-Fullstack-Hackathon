
let render = new HomeRender()
let model = new Review()

window.onload = async function () {
    let reviews = await model.getReviews()
    render.renderReviews(reviews)
}

$(document).on('click','.submit-btn', async function(){
    let youtubeLink = $('.song-link').val()
    let songName = $('.song-name').val()
    let singerName = $('.singer-name').val()
    let selectedCategory = $('.categories-menu').find(":selected").val();
    let reviewText = $('.review-input').val()

    await model.postNewReview(songName,singerName,youtubeLink,selectedCategory,reviewText)
    window.onload()

})