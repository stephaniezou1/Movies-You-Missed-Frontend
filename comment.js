class Comment {

    constructor(singleComment, uiComments){
        this.comment = singleComment
        // debugger;
        this.author = singleComment.author
        this.content = singleComment.content
        
        this.commentDiv = document.createElement("div")
            this.commentDiv.className = "comment"
        this.eachComment = document.createElement("div")
            this.eachComment.className = "content"
            this.authorName = document.createElement("a")
                this.authorName.innerText = this.author
            this.textContent = document.createElement("div")
                this.textContent.innerText = this.content
            this.deleteBtn = document.createElement("button")
                this.deleteBtn.className = "ui icon button"
                this.deleteBtn.innerHTML = `<i class="trash icon"></i>`
        this.eachComment.append(this.authorName, this.textContent, this.deleteBtn)
        this.commentDiv.append(this.eachComment)
        
        uiComments.append(this.commentDiv)

        this.deleteBtn.addEventListener("click", () => {
            this.handleDelete(uiComments)
        })
    }

    handleDelete = (uiComments, evt) => {
        deleteAComment(this.comment.id)
        .then((deletedComment) => {
            uiComments.remove()
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