class HomeRender{
    renderReviews(reviewsArray) {
        $('#reviews-section').empty()
        const source = $('#reviews-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ review: reviewsArray });
        $('#reviews-section').append(newHTML);
     }
}
