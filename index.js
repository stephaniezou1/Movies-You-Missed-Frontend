console.log("hello")

fetch(`http://localhost:3000/movies`)
    .then(response => response.json())
    // debugger;