var db = require("../models");
var passport = require("../config/passport");
// let imagequery = require("../public/js/submit")

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log('this is user info', req.user.dataValues)
    res.redirect("/")
  });

  app.post("/api/signup", function(req, res) {
  
    console.log("are we here");
    console.log(req);
    console.log(req.body);
    
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    console.log('GETTING USER DATA')
    if (!req.user) {
      res.json({});
    } else {
      console.log(req.user)
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  app.put("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      console.log(req.body)
    }
  });

  //posts a review to the database
  app.post("/api/review", function(req, res) {  
    const newReview = req.body.newReview;
    const category = req.body.category;
    const dataObj = {
      user: req.body.user,
      category: req.body.category,
      title: req.body.reviewTitle,
      review: req.body.review
    };
    switch (category) {
      case "movies":
        movies(newReview);
        break;
      case "books": 
        books(newReview);
        break;
      case "podcasts":
        podcasts(newReview);
        break;
    }
  });
 ///MOVIES///
//retrieves the data for all movies from the db
app.get("/api/movies", function(req, res) {
  db.Movie.findAll({}).then(function(dbMovie) {
    res.json(dbMovie);
  });
});
//posts a review to the database
var movies = function(newReview) {
  //make newReview and obj(variable) with all the things in it - category, username, etc
    app.post("/api/review/movies", function(req, res) {
      db.Movie.create ({
        
      }).then(function(dbMovie) {
          res.json(dbMovie);
        });
    });
  }
///BOOKS///
  //retrieves the data for all books from the db
  app.get("/api/books", function(req, res) {
    db.Book.findAll({}).then(function(dbBook) {
        res.json(dbBook);
  });
});
  //  //posts a review to the database
var books = function() {
  app.post("/api/review/books", function(req, res) {
    db.Book.create ({
      title: req.body.title,
      author: req.body.author,
      reviews: req.body.reviews
    }).then(function(dbBook) {
      res.json(dbBook);
    });
  });
}
///PODCASTS///
    //retrieves the data for all podcasts from the db
    app.get("/api/podcasts", function(req, res) {
      db.Podcast.findAll({}).then(function(dbPodcast) {
        res.json(dbPodcast);
      });
    });

  //  //posts a review to the database 
var podcasts = function() {
  app.post("/api/review/podcasts", function(req, res) {
    db.Podcast.create ({
      title: req.body.title,
      reviews: req.body.reviews
    }).then(function(dbPodcast) {
      res.json(dbPodcast);
    });
  });
}

}




