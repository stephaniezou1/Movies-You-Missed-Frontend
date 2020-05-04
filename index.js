movieListCollectionDiv = document.getElementById("movie-list")
console.log(movieListCollectionDiv)

fetch(`http://localhost:3000/movies`)
    .then(response => response.json())
    .then((arrOfMovies) => {
        // console.log(arrOfMovies)
        arrOfMovies.forEach(render)
    })

let render = (movie) => {
    
    // outer div
    let outerDiv = document.createElement("div")
        outerDiv.className = "ui fluid card"
    
    // content div
    let contentDiv = document.createElement("div")
        contentDiv.className = "content"
        let titleDiv = document.createElement("div")
            titleDiv.className = "header"
            titleDiv.innerText = movie.title
        let yearAndLengthDiv = document.createElement("div")
            yearAndLengthDiv.className = "meta"
            yearAndLengthDiv.innerText = `Released on ${movie.year}, ${movie.length}`
       
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
            likeSpan.className = "left floated like"
            // let likeButton = document.createElement("i")
            // likeButton.className = "like icon"
            // likeButton.innerText = "Like"
            likeSpan.innerHTML = `<i class="like icon"></i> Like`
        // likeSpan.append(likeButton)
        let commentSpan = document.createElement("span")
            commentSpan.className = "right floated comment"
            commentSpan.innerHTML = `<i class="comment icon"></i>
            Comment`

    extraContent.append(likeSpan, commentSpan)
    
    
    // append all to outer div
    outerDiv.append(imageOuterDiv, contentDiv, extraContent)

    movieListCollectionDiv.append(outerDiv)

    // add likes and comments event listeners here, question: do I need to build out likes and comments as movie attributes

    // Add event listener for more information

    outerDiv.addEventListener("click", (evt) => {
        
    })
}