class Comment {

    constructor(singleComment, uiComments) {
        
        this.comment = singleComment
        this.author = singleComment.author
        this.content = singleComment.content
        
        this.commentDiv = document.createElement("div")
            this.commentDiv.className = "ui form"
        this.eachComment = document.createElement("div")
            this.eachComment.className = "field"
            this.authorName = document.createElement("a")
                this.authorName.innerText = `${this.author} comments:`
            this.textContent = document.createElement("div")
                this.textContent.innerText = this.content
            this.deleteBtn = document.createElement("button")
                // this.deleteBtn.className = "mini ui right floated button"
                this.deleteBtn.innerText = `delete`
        this.eachComment.append(this.authorName, this.textContent, this.deleteBtn)
        this.commentDiv.append(this.eachComment)
        
        // console.log(this.commentDiv)
        // console.log(uiComments)
        uiComments.append(this.commentDiv)

        this.deleteBtn.addEventListener("click", () => {
            this.handleDelete(this.commentDiv)
        })

        // debugger;
        // console.log(this.commentForm)
    }

    handleDelete = (commentDiv, commentSpan, evt) => {
        // evt.preventDefault()
        deleteAComment(this.comment.id)
        .then((deletedComment) => {
            commentDiv.remove()
            // commentSpan.innerHTML = `<i class="comment icon"></i>${movie.comments.length - 1} Comments`
            let foundMovieComments = Movie.all.find((jsMovie) => {
                return jsMovie.movie.id === deletedComment.movie_id})
                console.log(foundMovieComments)
            let allCommentsExceptTheDeletedOne = foundMovieComments.movie.comments.filter((comment) => {
                return comment.id !== deletedComment.id
            })
            foundMovieComments.movie.comments = allCommentsExceptTheDeletedOne
        })
    }
    
}