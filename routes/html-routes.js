var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/html/index.html"));
    // });

    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/submit");
          }
          res.sendFile(path.join(__dirname, "../public/login.html"))
    });
    
    app.get("/submit", (req, res) => {
        res.render("submit")
    });

    app.get("/reviews", (req, res) => {
        res.render("reviews")
    });
    
    app.get("/signup", (req, res) => {
        res.render("signup")
    });
}