// searchBar.addEventListener("keyup", e => {
//     const searchString = e.target.value.toLowerCase()
//     const filteredMovies = Movie.all.filter(movie => {
//         return (
//           movie.title.includes(searchString) ||
//           movie.overview.includes(searchString) ||
//           movie.genre_description.includes(searchString)
//         );
//     });
//     displayMovies(filteredMovies);
// });

function mySearchFunction() {
    var input, filter, ul, li, item, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("movie-list");
    li = ul.getElementsByClassName("ui fluid card");  for (i = 0; i < li.length; i++) {
      item = li[i];
      txtValue = item.textContent || item.innerText ;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
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
