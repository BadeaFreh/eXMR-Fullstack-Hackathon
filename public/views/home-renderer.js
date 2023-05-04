class HomeRender {
    renderReviews(reviewsArray) {
        $('#reviews-section').empty()
        const source = $('#reviews-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({ review: reviewsArray })
        $('#reviews-section').append(newHTML)
    }

    emptyAllInputs() {
        $('.song-link').val('')
        $('.song-name').val('')
        $('.singer-name').val('')
        $('.review-input').val('')
    }
}
