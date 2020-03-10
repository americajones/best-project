
// Functions Definition
// BOOK
function createBook() {
    let reviews = ($('#reviews').val().trim())
    let title = ($('#title').val().trim().toLowerCase().replace(/\s+/g, '-'));
    let author = ($('#author').val().trim())
    $.ajax({
        url: `https://openlibrary.org/search.json?q=${title}`,
        method: "GET"
      }).then(function(response) {  
        let isbn = (response.docs[0].isbn[0])
        let image = (`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
        $.post("/api/books", {
            title: title,
            author: author,
            reviews: reviews,
            image: image
        }).then(function(data) {
            window.location.href = `/bookreview`
    });
})
}
// MOVIE
function createMovie() {
    let reviews = ($('#reviews').val().trim())
    let movieTitle = ($('#title').val().trim().toLowerCase().replace(/\s+/g, '-')) || 'up'
    $.ajax({  
      url: `https://www.omdbapi.com/?t=${movieTitle}&apikey=b63370de`,
      method: "GET"
    }).then(function(response) {
      $.post("/api/movies", {
          data:{
            title: movieTitle,
            reviews: reviews,
            image: response.Poster
          }
      }).then(function(data) {
        window.location.href = `/review`
        })
    })
};

$(document).ready(function(){
    $('select').formSelect(); 
}); 

$("#category").on("change", function(event) {
    if ($("#category").val() === "book") {
        window.location.href = `/booksubmit`;
    }
})

$(".return_butt").on("click", function(event) {
    event.preventDefault();
    window.location.href = `/submit`
});

$("#submit_butt").on("click", function(event) {
    event.preventDefault();
    let searchCategory = $('#category').val();
    switch(searchCategory) {
        case "book":
            createBook();
            break;
        case "movie":
            createMovie();
            break;
  }
});