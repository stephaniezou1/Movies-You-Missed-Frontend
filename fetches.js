let API_URL = `http://localhost:3000`

fetch(API_URL + `/movies`)
    .then(response => response.json())
    .then((arrOfMovies) => {
        // console.log(arrOfMovies)
        arrOfMovies.forEach(renderMovie)
    })


let handleLike = (movie, likeSpan) => {
    let newLike = movie.likes + 1
    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        "Accept": "Application/json"
      },
      body: JSON.stringify({
        likes: newLike
      })
    })
    .then(r => r.json())
    .then(updatedMovie => {
      movie.likes = updatedMovie.likes
      likeSpan.innerHTML = `<i class="like icon"></i>${updatedMovie.likes} Likes`
    })
  }
  

// fetch(API_URL + `/comments`)
//     .then(response => response.json())


// fetch(API_URL + `/comments`,{
//     method: "PATCH"
// })
//     .then(response => response.json())