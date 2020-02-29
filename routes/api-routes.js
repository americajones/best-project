var db = require("../models");
var passport = require("../config/passport");
// let imagequery = require("../public/js/submit")

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/")
  });

  app.post("/api/signup", function(req, res) {
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
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  app.get("/api/movies", function(req, res) {
    db.Movie.findAll({}).then(function(dbMovie) {
      res.json(dbMovie);
    });
  });

  app.post("/api/movies", function(req, res) {
    db.Movie.create({
      title: req.body.data.title,
      reviews: req.body.data.reviews,
      image: req.body.data.image
    }).then(function(response) {
      res.json(response)
    }).catch(function(err) {
      res.status(401).json(err);
    });
  });

  app.get("/api/books", function(req, res) {
    db.Book.findAll({}).then(function(dbBook) {
      res.json(dbBook);
    });
  });

  app.post("/api/books", function(req, res) {
    db.Book.create({
      title: req.body.title,
      author: req.body.author,
      reviews: req.body.reviews,
      image: req.body.image
    }).then(function(response) {
      res.json(response)
    }).catch(function(err) {
      console.log(err)
      res.status(401).json(err);
    });
  });

};
