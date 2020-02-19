// on click function
$('#search').on('click', function(event){
  event.preventDefault();
  console.log('hello');
  let searchTerm = ($('#searchForm').val().trim().toLowerCase().replace(/\s+/g, '-'))
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
})

//on click function for movie api call
$('#search').on('click', function(event) {
  event.preventDefault();
  console.log('working?');
  let searchTerm = ($('#searchForm').val().trim().toLowerCase().replace(/\s+/g, '-'))
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
});