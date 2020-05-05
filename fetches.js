let API_URL = `http://localhost:3000/`

fetch(API_URL + `movies`)
    .then(response => response.json())
    .then((arrOfMovies) => {
        // console.log(arrOfMovies)
        arrOfMovies.forEach(renderMovie)
    })

// let getAllMovies = () => {

//     fetch(API_URL + `movies`)
//         .then(response => response.json())
//         .then((allMovies) => {
//             allMovies.forEach((movie) => {
//                 new Movie(movie);
//         })
//     })
// }


let handleLike = (movie, likeSpan) => {
    let newLike = movie.likes + 1
    fetch(API_URL + `movies/${movie.id}`, {
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
  
let postComment = (movie, evt) => {
    let userName = evt.target.author.value
    let userComment = evt.target.content.value

    fetch(API_URL + `movies/${movie.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            author: userName,
            content: userComment
        })
    })
    .then(r => r.json())
    .then((newlyCreatedComment) => {
        console.log(newlyCreatedComment)
        evt.target.reset()
    })
}


