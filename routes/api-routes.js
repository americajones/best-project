var db = require("../models");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
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
};
