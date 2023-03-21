/*const Review = require('../models/review.js')
const HomeRender = require('../views/home-renderer.js')*/



let render = new HomeRender()
let model = new Review()

window.onload = async function () {
    let reviews = await model.getReviews()
    render.renderReviews(reviews)
}
window.onload()

/*let reviews =  model.getReviews()
render.renderReviews(reviews)*/

