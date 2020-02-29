$(document).ready(function() {
  // When the form is submitted, we validate there's an email and password entered
  $('#login_user').on("click", function(event) {
    event.preventDefault();
    var userData = {
      email: $('#email_inp').val().trim(),
      password: $('#password_inp').val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    $('#email_inp').val("");
    $('#password_inp').val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }, function(err, res){
      if (res === "success"){
        window.location = "/submit"
      }
    })
  }
});
