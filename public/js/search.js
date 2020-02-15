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
//ajax call