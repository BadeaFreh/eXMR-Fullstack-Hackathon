const RANDOM_TEXT_API = 'https://baconipsum.com/api/?type=$'

class Review {
    constructor() {
        this._songsData = []
    }

    addNewReview(review) {
        this._songsData.unshift(review)
    }

    getReviews() {
        return this._songsData
    }

    filterByCategory(category) {
        return this._songsData.filter((review) => review.genre === category)
    }

    requestReviews() {
        return $.get(`/songs-reviews`)
            .then((songsResults) => {
                this._songsData = songsResults
                return this._songsData
            })
            .catch((err) => console.log('error in get/songs-reviews'))
    }

    async generateRandomName() {
        const randomText = await $.get(RANDOM_TEXT_API)
        const firstName = randomText[0].split(' ')[0]
        const lastName = randomText[0].split(' ')[1]
        const fullName = firstName + ' ' + lastName
        return fullName
    }

    formattedDate(date) {
        let year = date.toLocaleString('default', { year: 'numeric' })
        let month = date.toLocaleString('default', { month: '2-digit' })
        let day = date.toLocaleString('default', { day: '2-digit' })
        let formattedDate = year + '-' + month + '-' + day
        return formattedDate
    }

    async postNewReview(
        title,
        singerName,
        sourceLink,
        songCategory,
        songReview
    ) {
        const randomUserName = await this.generateRandomName()
        let newSongObject = {
            songTitle: title,
            singer: singerName,
            source: sourceLink,
            user: randomUserName,
            datePosted: this.formattedDate(new Date()),
            genre: songCategory,
            reactions: { likes: 0, dislikes: 0, angry: 0, wow: 0 },
            review: songReview,
        }

        return $.ajax({
            url: 'song-review',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(newSongObject),
            success: (result) => {},
        })
    }
}
