class Movie {
    constructor(movie) {
        this.movie = movie

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
        this.yearAndLengthDiv = document.createElement("div")
            this.yearAndLengthDiv.className = "meta"
            this.yearAndLengthDiv.innerText = `Released on ${movie.year} - Runtime of ${movie.length}`
       
        this.contentDiv.append(this.titleDiv, this.yearAndLengthDiv)

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
        this.uiHeader = document.createElement("h3")
            this.uiHeader.className = "ui dividing header"
        
        this.uiComments.append(this.uiHeader)

        this.movie.comments.forEach((singleComment) => {
            
            this.author = singleComment.author
            this.content = singleComment.content
            
            this.commentDiv = document.createElement("div")
                this.commentDiv.className = "comment"
            this.eachComment = document.createElement("div")
                this.eachComment.className = "content"
                this.authorName = document.createElement("a")
                    this.authorName.innerText = author
                this.textContent = document.createElement("div")
                    this.textContent.innerText = content
                this.deleteBtn = document.createElement("button")
                    this.deleteBtn.className = "ui icon button"
                    this.deleteBtn.innerHTML = `<i class="cloud icon"></i>`
            this.eachComment.append(this.authorName, this.textContent, this.deleteBtn)
            this.commentDiv.append(this.eachComment)

            this.uiComments.append(this.commentDiv)
        })
        
        this.commentForm = document.createElement("form")
            this.commentForm.className = "ui reply form"
            this.authorField = document.createElement("div")
                this.authorField.className = "field"
            this.authorText = document.createElement("textarea")
            this.authorField.append(this.authorText)
            this.commentField = document.createElement("div")
                this.commentField.className = "field"
            this.contentText = document.createElement("textarea")
            this.commentField.append(this.contentText)
            this.submitBtn = document.createElement("div")
                this.submitBtn.className = "ui blue labeled submit icon button"
                this.submitBtn.innerHTML = `<i class="icon edit"></i> Add Comment`
            
        this.commentForm.append(this.authorField, this.commentField, this.submitBtn)
        
        this.uiComments.append(this.commentForm)
        this.extraContent.append(this.likeSpan, this.commentSpan, this.uiComments)
        this.outerDiv.append(this.secondDiv, this.imageOuterDiv, this.contentDiv, this.extraContent)
        movieListCollectionDiv.append(this.outerDiv)

        // click event for image to show description
        $(".image").click(function() {
            $(this).parent().find(".ui.dimmer").dimmer("toggle");
        });

        // likes and comments event listeners

        this.likeSpan.addEventListener("click", this.handleLike)

        this.commentSpan.addEventListener("click", () => {
            addComment = !addComment;
            if (addComment) {
                uiComments.style.display = "block";
            } else {
                uiComments.style.display = "none";
            }
        })

        this.commentForm.addEventListener("submit", this.postComment) // where do I add the preventdefault?

        this.deleteBtn.addEventListener("click", this.handleDelete)

    }
}













// let renderMovie = (movie) => {
    
    // // outer div
    // let outerDiv = document.createElement("div")
    //     outerDiv.className = "ui fluid card"
    
    // // second div
    //     let secondDiv = document.createElement("div")
    //         secondDiv.className = "card"
    
    //         let blurringDiv = document.createElement("div")
    //             blurringDiv.className = "blurring dimmable image"

    //             let dimmerDiv = document.createElement("div")
    //                 dimmerDiv.className = "ui dimmer"

    //                 let hiddenContentDiv = document.createElement("div")
    //                     hiddenContentDiv.className = "content"

    //                     let centerDiv = document.createElement("div")
    //                         centerDiv.className = "center"

    //                         let uiInvertedButtonDiv = document.createElement("div")
    //                             uiInvertedButtonDiv.className = "ui inverted button"
    //                             uiInvertedButtonDiv.innerText = `Genre: ${movie.genre_description}, Description: ${movie.overview}`
    //                             // uiInvertedButtonDiv.innerHTML = `<div class="ui inverted button">Add Friend</div></div>`
                        
    //                     centerDiv.append(uiInvertedButtonDiv)
    //                 hiddenContentDiv.append(centerDiv)
    //             dimmerDiv.append(hiddenContentDiv)
    //         blurringDiv.append(dimmerDiv)
    //     secondDiv.append(blurringDiv)
    
    // // content div
    // let contentDiv = document.createElement("div")
    //     contentDiv.className = "content"
    //     let titleDiv = document.createElement("div")
    //         titleDiv.className = "header"
    //         titleDiv.innerText = movie.title
    //     let yearAndLengthDiv = document.createElement("div")
    //         yearAndLengthDiv.className = "meta"
    //         yearAndLengthDiv.innerText = `Released on ${movie.year} - Runtime of ${movie.length}`
       
    // contentDiv.append(titleDiv, yearAndLengthDiv)
    
    // movie poster div
    // let imageOuterDiv = document.createElement("div")
    //     imageOuterDiv.className = "image"
    //     let moviePoster = document.createElement("img")
    //         moviePoster.src = movie.poster_url
    // imageOuterDiv.append(moviePoster)

    // extra content div aka like and comment

    // let extraContent = document.createElement("div")
    //     extraContent.className = "extra content"
    //     let likeSpan = document.createElement("span")
    //         likeSpan.className = "right floated like"
    //         // let likeButton = document.createElement("i")
    //         // likeButton.className = "like icon"
    //         // likeButton.innerText = "Like"
    //         likeSpan.innerHTML = `<i class="like icon"></i>${movie.likes} Likes`
        
    //         // likeSpan.append(likeButton)
    //     let commentSpan = document.createElement("span")
    //         commentSpan.className = "left floated comment"
    //         commentSpan.innerHTML = `<i class="comment icon"></i>${movie.comments.length} Comments`
        
    //     // created comments and comment form here
    //     let uiComments = document.createElement("div")
    //         uiComments.className = "ui comments"
    //     let uiHeader = document.createElement("h3")
    //         uiHeader.className = "ui dividing header"
    //     uiComments.append(uiHeader)

        // movie.comments.forEach((singleComment) => {
            
        //     let author = singleComment.author
        //     let content = singleComment.content
            
        //     let commentDiv = document.createElement("div")
        //     commentDiv.className = "comment"
        //     let eachComment = document.createElement("div")
        //     eachComment.className = "content"
        //         let authorName = document.createElement("a")
        //             authorName.innerText = author
        //         let textContent = document.createElement("div")
        //             textContent.innerText = content
        //         let deleteBtn = document.createElement("button")
        //             deleteBtn.className = "ui icon button"
        //             deleteBtn.innerHTML = `<i class="cloud icon"></i>`
        //     eachComment.append(authorName, textContent, deleteBtn)
        //     commentDiv.append(eachComment)

        //     uiComments.append(commentDiv)
        // })

        // let commentForm = document.createElement("form")
        //     commentForm.className = "ui reply form"
        //     let authorField = document.createElement("div")
        //         authorField.className = "field"
        //     let authorText = document.createElement("textarea")
        //     authorField.append(authorText)
        //     let commentField = document.createElement("div")
        //         commentField.className = "field"
        //     let contentText = document.createElement("textarea")
        //     commentField.append(contentText)
        //     let submitBtn = document.createElement("div")
        //         submitBtn.className = "ui blue labeled submit icon button"
        //         submitBtn.innerHTML = `<i class="icon edit"></i> Add Comment`
            
        // commentForm.append(authorField, commentField, submitBtn)
        
        // uiComments.append(commentForm)

        // commentSpan.append(uiComments)
            

    // extraContent.append(likeSpan, commentSpan)
    
    // // append all to outer div except image
    // outerDiv.append(secondDiv, imageOuterDiv, contentDiv, extraContent)

    // movieListCollectionDiv.append(outerDiv)

    // // click event for image to show description
    //   $(".image").click(function() {
    //     $(this).parent().find(".ui.dimmer").dimmer("toggle");
    //   });

//     // add likes and comments event listeners here

//     likeSpan.addEventListener("click", () => {
//         handleLike(movie, likeSpan)
//       })

//     commentSpan.addEventListener("click", () => {
//         addComment = !addComment;
//         if (addComment) {
//             uiComments.style.display = "block";
//         } else {
//             uiComments.style.display = "none";
//         }
//     })

//     commentForm.addEventListener("submit", (evt) => {
//         evt.preventDefault()
//         postComment(movie, evt)
//     })

//     deleteBtn.addEventListener("click", () => {
//         handleDelete(movie, deleteBtn)
//     })
    
// }
