
// Functions Definition
// ERR
function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
// BOOK
function createBook() {
    console.log('book working?');
    let reviews = ($('#reviews').val().trim())
    let title = ($('#title').val().trim().toLowerCase().replace(/\s+/g, '-'));
    let author = ($('#author').val().trim())
    $.ajax({
        url: `http://openlibrary.org/search.json?q=${title}`,
        method: "GET"
      }).then(function(response) {
        console.log(response)  
        let isbn = (response.docs[0].isbn[0])
        let image = (`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
        $.post("/api/books", {
            title: title,
            author: author,
            reviews: reviews,
            image: image
        }).then(function(data) {
            console.log(data);
            window.location.href = `/review`
            // If there's an error, handle it by throwing up a bootstrap alert
        // }).catch(handleLoginErr)
    });
})
}
// MOVIE
function createMovie() {
    console.log('movie working?');
    let reviews = ($('#reviews').val().trim())
    let movieTitle = ($('#title').val().trim().toLowerCase().replace(/\s+/g, '-')) || 'up'
    $.ajax({  
      url: `https://www.omdbapi.com/?t=${movieTitle}&apikey=b63370de`,
      method: "GET"
    }).then(function(response) {
      console.log(response.Poster);
      $.post("/api/movies", {
          data:{
            title: movieTitle,
            reviews: reviews,
            image: response.Poster
          }
      }).then(function(data) {
        console.log(data);
        window.location.href = `/review`
        
    //   }).catch(handleLoginErr);
    //     function handleLoginErr(err) {
    //         $("#alert .msg").text(err.responseJSON);
    //         $("#alert").fadeIn(500);
    //     }
    })
        // if (err) throw (err);
    })
};
// PODCASTS
// function createPodcast(title, review) {
//     let api = "168047bb609b40a59ba42611be558681"
//     console.log("podcast get")
//     event.preventDefault();
//     let podTitle = ($('#title').val().trim().toLowerCase().replace(/\s+/g, '-'))
//     console.log(podTitle);
//     $.ajax({
//         url: `https://listen-api.listennotes.com/api/v2/search?q=${podTitle}`,
//         headers: {"X-ListenAPI-Key": api},
//         method: "GET"
//     }).then(function(response) {
//         console.log(response.results);
//         console.log(response.results[0].image);
//         $.post("/api/review/movies", {
//         title: podTitle,
//         review: review,
//         image: response.results[0].image
//     }).then (function(data) {
//         console.log(data);
//         window.location.replace("/reviews");
//     }).catch(handleLoginErr)
//     })
// }

$("#submit_butt").on("click", function(event) {
    event.preventDefault();
    console.log('got to submit butt')
    let searchCategory = $('#category').val();
    console.log('searchCategory', searchCategory);
    switch(searchCategory) {
        case "book":
            // on click function for book api call
            event.preventDefault();
            createBook();
            break;
        case "movie":
            // on click function for movie api call
            // event.preventDefault();
            createMovie();
            break;
        // case "podcast":
        //     // on click function for podcast api call
        //     event.preventDefault();
        //     createPodcast();
        //     break;
  }
});