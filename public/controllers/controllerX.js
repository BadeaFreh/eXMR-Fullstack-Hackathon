
let render = new HomeRender()
let model = new Review()

window.onload = async function () {
    let reviews = await model.getReviews(0)
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


$(document).on('click','.btn-all-categories',  function(){
    window.onload()
})

$(document).on('click','#pop-btn',  async function(){
    let reviews = await model.getReviews('Pop')
    render.renderReviews(reviews)
})

$(document).on('click','#Metal-btn',  async function(){
    let reviews = await model.getReviews('Metal')
    render.renderReviews(reviews)
})

$(document).on('click','#Hip-Hop-btn',  async function(){
    let reviews = await model.getReviews('Hip-Hop')
    render.renderReviews(reviews)
})

$(document).on('click','#Rock-btn',  async function(){
    let reviews = await model.getReviews('Rock')
    render.renderReviews(reviews)
})

$(document).on('click','#Country-btn',  async function(){
    let reviews = await model.getReviews('Country')
    render.renderReviews(reviews)
})



