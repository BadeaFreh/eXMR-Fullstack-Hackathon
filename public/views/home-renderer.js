 class HomeRender{
    renderReviews(reviewsArray) {
<<<<<<< HEAD
        
        //$('#reviews-section').empty()
=======
        $('#reviews-section').empty()
>>>>>>> master
        const source = $('#reviews-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ review: reviewsArray });
        $('#reviews-section').append(newHTML);
     }
}
<<<<<<< HEAD

=======
>>>>>>> master
