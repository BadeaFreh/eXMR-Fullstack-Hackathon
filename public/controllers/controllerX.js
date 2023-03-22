
let render = new HomeRender()
let model = new Review()

window.onload = async function () {
    //let reviews = await model.getReviews()
    render.renderReviews(songReviews)
}

