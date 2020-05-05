fetch(`http://localhost:3000/movies`)
    .then(response => response.json())
    .then((arrOfMovies) => {
        // console.log(arrOfMovies)
        arrOfMovies.forEach(renderMovie)
    })