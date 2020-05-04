movieListCollectionDiv = document.getElementById("movie-list")
console.log(movieListCollectionDiv)

fetch(`http://localhost:3000/movies`)
    .then(response => response.json())
    .then((arrOfMovies) => {
        // console.log(arrOfMovies)
        arrOfMovies.forEach(render)
    })

let render = (movie) => {
    
    let outerDiv = document.createElement("div")
        outerDiv.className = "ui fluid card"
    
    let contentDiv = document.createElement("div")
        contentDiv.className = "content"
        let titleDiv = document.createElement("div")
            titleDiv.className = "header"
            titleDiv.innerText = movie.title
        let releaseDiv = document.createElement("div")
            releaseDiv.className = "ui sub header"
            releaseDiv.innerText = `Released on ${movie.year}`
    contentDiv.append(titleDiv, releaseDiv)
    
    let imageOuterDiv = document.createElement("div")
        imageOuterDiv.className = "image"
        let moviePoster = document.createElement("img")
            moviePoster.src = movie.poster_url
    imageOuterDiv.append(moviePoster)
    

    outerDiv.append(contentDiv, imageOuterDiv)

    movieListCollectionDiv.append(outerDiv)
}