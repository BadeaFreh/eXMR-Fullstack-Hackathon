
const emojees = {
    "like": "👍",
    "dislike": "👎",
    "angry": "😡",
    "wow": "😮"
}
const reviewsReactedTo = {}

let render = new HomeRender()
let model = new Review()

window.onload = async function () {
    let reviews = await model.requestReviews()
    render.renderReviews(reviews)
}

$('form').on('submit', function (event) {
    event.preventDefault()
})

$(document).on('click','.submit-btn', async function() {
    console.log("clicked")
    let youtubeLink = $('.song-link').val()
    let songName = $('.song-name').val()
    let singerName = $('.singer-name').val()
    let selectedCategory = $('.categories-menu').find(":selected").val()
    let reviewText = $('.review-input').val()
    const newReview = await model.postNewReview(songName, singerName, youtubeLink, selectedCategory, reviewText)
    model.addNewReview(newReview)
    console.log(model.getReviews())
    render.renderReviews(model.getReviews())
    render.emptyAllInputs()
})

$(document).on('click','#all-btn', async function(){
    render.renderReviews(model.getReviews())
})
$(document).on('click','#pop-btn', function(){
    let reviews = model.filterByCategory('Pop')
    render.renderReviews(reviews)
})
$(document).on('click','#hiphop-btn', async function(){
    let reviews = await model.filterByCategory('Hip-Hop')
    render.renderReviews(reviews)
})
$(document).on('click','#metal-btn', async function(){
    let reviews = await model.filterByCategory('Metal')
    render.renderReviews(reviews)
})
$(document).on('click','#rock-btn', async function(){
    let reviews = await model.filterByCategory('Rock')
    render.renderReviews(reviews)
})
$(document).on('click','#country-btn', function(){
    let reviews = model.filterByCategory('Country')
    render.renderReviews(reviews)
})
$(document).on('click','#soul-btn', function(){
    let reviews = model.filterByCategory('Soul')
    render.renderReviews(reviews)
})
$(document).on('click','#rap-btn', function(){
    let reviews = model.filterByCategory('Rap')
    render.renderReviews(reviews)
})
$(document).on('click','#rnb-btn', function(){
    let reviews = model.filterByCategory('RNB')
    render.renderReviews(reviews)
})
$(document).on('click','#alternative-btn', function(){
    let reviews = model.filterByCategory('Alternative')
    render.renderReviews(reviews)
})
$(document).on('click','#electronic-btn', function(){
    let reviews = model.filterByCategory('Electronic')
    render.renderReviews(reviews)
})

$(document).on('click','.like-btn',function(){
    const songReviewID = $(this).closest('li').attr('id')
    if (!reviewsReactedTo[songReviewID]) {
        const likesCounter = parseInt($(this).text().split(' ')[1]) + 1
        $(this).text(`${emojees.like} ${likesCounter}`)
        reviewsReactedTo[songReviewID] = {
            like: "on",
            dislike: "off",
            angry: "off",
            wow: "off"
        }
        return
    }
    const prevReaction = findPrevReaction(songReviewID)
    updateReactions(songReviewID, "like", prevReaction)
})

$(document).on('click','.dislike-btn',function(){
    const songReviewID = $(this).closest('li').attr('id')
    if (!reviewsReactedTo[songReviewID]) {
        const dislikesCounter = parseInt($(this).text().split(' ')[1]) + 1
        $(this).text(`${emojees.dislike} ${dislikesCounter}`)
        reviewsReactedTo[songReviewID] = {
            like: "off",
            dislike: "on",
            angry: "off",
            wow: "off"
        }
        return
    }
    const prevReaction = findPrevReaction(songReviewID)
    console.log(prevReaction)
    updateReactions(songReviewID, "dislike", prevReaction)
})

$(document).on('click','.wow-btn',function(){
    const songReviewID = $(this).closest('li').attr('id')
    if (!reviewsReactedTo[songReviewID]){
        const wowCounter = parseInt($(this).text().split(' ')[1]) + 1
        $(this).text(`${emojees.wow} ${wowCounter}`)
        reviewsReactedTo[songReviewID] = {
            like: "off",
            dislike: "off",
            angry: "off",
            wow: "on"
        }
        return
    }
    const prevReaction = findPrevReaction(songReviewID)
    updateReactions(songReviewID, "wow", prevReaction)
})

$(document).on('click','.angry-btn',function(){
    const songReviewID = $(this).closest('li').attr('id')
    if (!reviewsReactedTo[songReviewID]){
        const angryCounter = parseInt($(this).text().split(' ')[1]) + 1
        $(this).text(`${emojees.angry} ${angryCounter}`)
        reviewsReactedTo[songReviewID] = {
            like: "off",
            dislike: "off",
            angry: "on",
            wow: "off"
        }
        return
    }
    const prevReaction = findPrevReaction(songReviewID)
    updateReactions(songReviewID, "angry", prevReaction)
})

function updateReactions(reviewId, reactionClicked, prevReaction) {
    if (prevReaction === reactionClicked && reviewsReactedTo[reviewId].reactionClicked === "on") {
        let selectedReactionCounter = parseInt($(`body #${reviewId} .${reactionClicked}-btn`).text().split[1]) - 1
        $(`.${reactionClicked}-btn`).text(`${emojees.reactionClicked} ${selectedReactionCounter}`)
        reviewsReactedTo[reviewId].reactionClicked === "off"
    }
    else if (!prevReaction) {
        let selectedReactionCounter = parseInt($(`body #${reviewId} .${reactionClicked}-btn`).text().split[1]) + 1
        $(`.${reactionClicked}-btn`).text(`${emojees.reactionClicked} ${selectedReactionCounter}`)
        reviewsReactedTo[reviewId].reactionClicked === "on"
    }
}

function findPrevReaction(reviewId) {
    let prevReaction = null
    for (let key in reviewsReactedTo[reviewId]) {
        if (reviewsReactedTo[reviewId][key] === "on") {
            prevReaction = key
        }
    }
    return prevReaction
}
