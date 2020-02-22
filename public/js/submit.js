$("#submit_butt").on("click", function(event) {
    event.preventDefault();
    console.log('got to submit butt')
    let searchCategory = $('#category').val();
    console.log('searchCategory', searchCategory)
    let title = ($('#title').val().trim().toLowerCase().replace(/\s+/g, '-'))
    switch(searchCategory) {
      case "book":
        console.log('got to book')
        $(".submit_box").innerHTML(`input(class="form" type="text" id="author" placeholder="Author?")
        br
        br;`)
    $.ajax({
        url: `http://cors-anywhere.herokuapp.com/http://openlibrary.org/search.json?q=${title}`,
        method: "GET"
      }).then(function(response) {
        let isbn = (response.docs[0].isbn[0])
          let image = (`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`);
          $.post("/api/review/books", {
            title: title,
            author: author,
            review: review,
            image: image
          })
            .then(function(data) {
              window.location.replace("/reviews");
              // If there's an error, handle it by throwing up a bootstrap alert
            }).catch(handleLoginErr);
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
      // let iconDiv = $("<div class='icon'>");
      // let imgURL = response.Poster;
      // // Creating an element to hold the image
      // let image = $("<img>").attr("src", imgURL);
      // // Appending the image
      // iconDiv.append(image);
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