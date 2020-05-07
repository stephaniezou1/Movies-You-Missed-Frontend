class Movie {

    static all = []
    
    constructor(movie) {
        this.movie = movie

        Movie.all.push(this)

        // card and blur effect
        this.outerDiv = document.createElement("div")
        this.outerDiv.className = "ui fluid card"

        this.secondDiv = document.createElement("div")
            this.secondDiv.className = "card"

        this.blurringDiv = document.createElement("div")
            this.blurringDiv.className = "blurring dimmable image"

        this.dimmerDiv = document.createElement("div")
            this.dimmerDiv.className = "ui dimmer"

        this.hiddenContentDiv = document.createElement("div")
            this.hiddenContentDiv.className = "content"

        this.centerDiv = document.createElement("div")
            this.centerDiv.className = "center"

        this.uiInvertedButtonDiv = document.createElement("div")
            this.uiInvertedButtonDiv.className = "ui inverted button"
            this.uiInvertedButtonDiv.innerText = `Genre: ${movie.genre_description}, Description: ${movie.overview}`

        this.centerDiv.append(this.uiInvertedButtonDiv)
        this.hiddenContentDiv.append(this.centerDiv)
        this.dimmerDiv.append(this.hiddenContentDiv)
        this.blurringDiv.append(this.dimmerDiv)
        this.secondDiv.append(this.blurringDiv)

        // content div

        this.contentDiv = document.createElement("div")
            this.contentDiv.className = "content"
        this.titleDiv = document.createElement("div")
            this.titleDiv.className = "header"
            this.titleDiv.innerText = movie.title
        this.yearDiv = document.createElement("div")
            this.yearDiv.className = "meta"
            this.yearDiv.innerHTML = `<br/>Released: ${movie.year}`
        this.lengthDiv = document.createElement("div")
            this.lengthDiv.className = "meta"
            this.lengthDiv.innerText = `${movie.length}`
        this.ratingDiv = document.createElement("div")
            this.ratingDiv.className = "meta"
            this.ratingDiv.innerText = `Rating: ${movie.rating}`
        
        this.contentDiv.append(this.titleDiv, this.yearDiv, this.lengthDiv, this.ratingDiv)

        // poster image div
        this.imageOuterDiv = document.createElement("div")
            this.imageOuterDiv.className = "image"
        this.moviePoster = document.createElement("img")
            this.moviePoster.src = movie.poster_url
        
        this.imageOuterDiv.append(this.moviePoster)

        // like and comment div

        this.extraContent = document.createElement("div")
            this.extraContent.className = "extra content"
        this.likeSpan = document.createElement("span")
            this.likeSpan.className = "right floated like"
            this.likeSpan.innerHTML = `<i class="like icon"></i>${movie.likes} Likes`
        this.commentSpan = document.createElement("span")
            this.commentSpan.className = "left floated comment"
            this.commentSpan.innerHTML = `<i class="comment icon"></i>${movie.comments.length} Comments`
        
        // display for comments
        this.uiComments = document.createElement("div")
            this.uiComments.className = "ui comments"
            this.uiComments.setAttribute("id", "comments");
        this.uiHeader = document.createElement("h3")
            this.uiHeader.className = "ui dividing header"
        
        this.uiComments.append(this.uiHeader)

        this.movie.comments.forEach((singleComment) => {
            new Comment(singleComment, this.uiComments)
        })
        
        this.commentForm = document.createElement("form")
            this.commentForm.className = "ui reply form"
            this.commentForm.innerHTML = `<br/>Add a comment`
            this.authorField = document.createElement("div")
                this.authorField.innerHTML = `<input type="text" name="name" value="" placeholder="Your name" class="input-text">`
            this.commentField = document.createElement("div")
                this.commentField.innerHTML = `<input type="text" name="comment" value="" placeholder="Enter a comment" class="input-text">`
            this.submitBtn = document.createElement("div")
                this.submitBtn.innerHTML = `<br/><input type="submit" name="submit" value="Add a Comment" class="ui button">`
            
        this.commentForm.append(this.authorField, this.commentField, this.submitBtn)

        // this.uiComments.append(this.commentForm)
        
        this.extraContent.append(this.likeSpan, this.commentSpan, this.uiComments, this.commentForm)
        this.outerDiv.append(this.secondDiv, this.imageOuterDiv, this.contentDiv, this.extraContent)
        movieListCollectionDiv.append(this.outerDiv)

        // click event for image to show description
        $(".image").click(function() {
            $(this).parent().find(".ui.dimmer").dimmer("toggle");
        });

        // likes and comments event listeners

        this.likeSpan.addEventListener("click", () => {
            handleLike(this.movie, this.likeSpan)
        })

        this.commentSpan.addEventListener("click", () => {
            addComment = !addComment;
            if (addComment) {
                this.uiComments.style.display = "block";
                this.commentForm.style.display = "block";
            } else {
                this.uiComments.style.display = "none";
                this.commentForm.style.display = "none";
            }
        })  

        this.commentForm.addEventListener("submit", (evt) => {
            evt.preventDefault()   
            // debugger;         
            postComment(this.movie, evt, this.uiComments)
        })
        
    }

}