// on click function
$("#search").on("click", function(event){
    event.preventDefault();
    console.log("hello");
    let searchTerm = ($("#searchForm").val().trim().toLowerCase().replace(/\s+/g, '-'))
    $.ajax({
        url: `http://openlibrary.org/search.json?q=${searchTerm}`,
        method: "GET"
      }).then(function(response) {
        let isbn = (response.docs[0].isbn[0])
        $.ajax({
            url: `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`,
            method: "GET"
          }).then(function(response) {
            console.log(response);
          });
      });
});


//ajax call
//movie api call 
$("#search").on("click", function(event) {
  event.preventDefault();
  console.log("Working?");
  let searchTerm = ($("#searchForm").val().trim().toLowerCase().replace(/\s+/g, '-'))
  
  $.ajax({
    url: `https://www.omdbapi.com/?t=${searchTerm}&apikey=b63370de`,
    method: "GET"
  }).then(function(response) {
    //  let movieDiv = $("<div class='movie'>");
    //  let imgURL = response.Poster;

    //  let image = $("<img>").attr("src", imgURL);

    //  movieDiv.append(image);

    console.log(response.Poster);
  });
});
