console.log(movieListCollectionDiv)


let renderMovie = (movie) => {
    
    // outer div
    let outerDiv = document.createElement("div")
        outerDiv.className = "ui fluid card"
    
    // second div
        let secondDiv = document.createElement("div")
            secondDiv.className = "card"
    
            let blurringDiv = document.createElement("div")
                blurringDiv.className = "blurring dimmable image"

                let dimmerDiv = document.createElement("div")
                    dimmerDiv.className = "ui dimmer"

                    let hiddenContentDiv = document.createElement("div")
                        hiddenContentDiv.className = "content"

                        let centerDiv = document.createElement("div")
                            centerDiv.className = "center"

                            let uiInvertedButtonDiv = document.createElement("div")
                                uiInvertedButtonDiv.className = "ui inverted button"
                                uiInvertedButtonDiv.innerText = `Genre: ${movie.genre_description}, Description: ${movie.overview}`
                                // uiInvertedButtonDiv.innerHTML = `<div class="ui inverted button">Add Friend</div></div>`
                        
                        centerDiv.append(uiInvertedButtonDiv)
                    hiddenContentDiv.append(centerDiv)
                dimmerDiv.append(hiddenContentDiv)
            blurringDiv.append(dimmerDiv)
        secondDiv.append(blurringDiv)
    
    // content div
    let contentDiv = document.createElement("div")
        contentDiv.className = "content"
        let titleDiv = document.createElement("div")
            titleDiv.className = "header"
            titleDiv.innerText = movie.title
        let yearAndLengthDiv = document.createElement("div")
            yearAndLengthDiv.className = "meta"
            yearAndLengthDiv.innerText = `Released on ${movie.year} - Runtime of ${movie.length}`
       
    contentDiv.append(titleDiv, yearAndLengthDiv)
    
    // movie poster div
    let imageOuterDiv = document.createElement("div")
        imageOuterDiv.className = "image"
        let moviePoster = document.createElement("img")
            moviePoster.src = movie.poster_url
    imageOuterDiv.append(moviePoster)

    // extra content div aka like and comment

    let extraContent = document.createElement("div")
        extraContent.className = "extra content"
        let likeSpan = document.createElement("span")
            likeSpan.className = "right floated like"
            // let likeButton = document.createElement("i")
            // likeButton.className = "like icon"
            // likeButton.innerText = "Like"
            likeSpan.innerHTML = `<i class="like icon"></i> Like`
        // likeSpan.append(likeButton)
        let commentSpan = document.createElement("span")
            commentSpan.className = "left floated comment"
            commentSpan.innerHTML = `<i class="comment icon"></i>
            Comment`

    extraContent.append(likeSpan, commentSpan)
    
    // append all to outer div except image
    outerDiv.append(secondDiv, imageOuterDiv, contentDiv, extraContent)

    movieListCollectionDiv.append(outerDiv)

    // click event for image to show description
      $(".image").click(function() {
        $(this).parent().find(".ui.dimmer").dimmer("toggle");
      });

    // add likes and comments event listeners here, question: do I need to build out likes and comments as movie attributes
}


commentHeader.addEventListener("click", (evt) => {
    addComment = !addComment;
    if (addComment) {
        commentContainer.style.display = "block";
    } else {
        commentContainer.style.display = "none";
    }
})

homeHeader.addEventListener("click", (evt) => {
    commentContainer.style.display = "none";
})