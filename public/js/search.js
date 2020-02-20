// on click function
$('#search').on('click', function(event){
  event.preventDefault();
  console.log('hello');
  let searchCategory = $('#searchCategory').val();
  let searchTerm = ($('#searchForm').val().trim().toLowerCase().replace(/\s+/g, '-'))

  switch(searchCategory) {
    case "book":
  $.ajax({
      url: `http://cors-anywhere.herokuapp.com/http://openlibrary.org/search.json?q=${searchTerm}`,
      method: "GET"
    }).then(function(response) {
      let isbn = (response.docs[0].isbn[0])
      // $.ajax({
      //   url:  `http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`,
      //   method: "GET"
      // }).then(function(response) {
        console.log(`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
      // });
    // let searchTerm = ($('#searchForm').val().trim().toLowerCase().replace(/\s+/g, '-'))
    $.ajax({
    url: `https://www.omdbapi.com/?t=${searchTerm}&apikey=b63370de`,
    method: "GET"
    }).then(function(response) {
    console.log(response.Poster);
    });
  });

break;

case "movie":
// on click function for movie api call
  event.preventDefault();
  console.log('working?');
  // let searchTerm = ($('#searchForm').val().trim().toLowerCase().replace(/\s+/g, '-'))
  $.ajax({
    url: `https://www.omdbapi.com/?t=${searchTerm}&apikey=b63370de`,
    method: "GET"
  }).then(function(response) {
    console.log(response.Poster);
    // let movieDiv = $("<div class='movie'>");
    // let imgURL = response.Poster;
    // // Creating an element to hold the image
    // let image = $("<img>").attr("src", imgURL);
    // // Appending the image
    // movieDiv.append(image);
  });
  break;
  
  case "podcast":
    let api = "168047bb609b40a59ba42611be558681"
    console.log("podcast get")
    event.preventDefault();
    $.ajax({
      url: `https://listen-api.listennotes.com/api/v2/search?q=${searchTerm}`,
      headers: {"X-ListenAPI-Key": api},
      method: "GET"
    }).then(function(response) {
      console.log(response.results);
      console.log(response.results[0].image);
    })
    break;
}

});
  