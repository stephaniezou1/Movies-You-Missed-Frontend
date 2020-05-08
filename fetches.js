let API_URL = `http://localhost:3000/`


fetch(API_URL + `movies`)
    .then(response => response.json())
    .then((allMovies) => {
        allMovies.forEach((movie) => {
            new Movie(movie);
    })
})


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
  
let postComment = (movie, evt, uiComments, commentSpan) => {
    let newAuthor = evt.target.name.value
    let newContent = evt.target.comment.value

    fetch(API_URL + `comments`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
        body: JSON.stringify({
            content: newContent,
            author: newAuthor,
            movie_id: movie.id
        })
      })
    .then(r => r.json())
    .then((newlyCreatedComment) => {
        new Comment(newlyCreatedComment, uiComments)
        commentSpan.innerHTML = `<i class="comment icon"></i>${movie.comments.length + 1} Comments`
        evt.target.reset()
    })
    
}

let deleteAComment = (id) => {
    return fetch(API_URL + `comments/${id}`, {
        method: "DELETE"
      })
        .then(r => r.json())
}
    


