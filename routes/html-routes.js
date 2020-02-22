var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/html/index.html"));
    // });

    app.get("/", (req, res) => {
        if(req.user){
            console.log
            res.render("submit")
        }else{
            res.render("index")
        }
    
        // if (req.user) {
        //     res.redirect("/submit");
        //   }
        //   res.sendFile(path.join(__dirname, "../public/login.html"))
    });
    
    app.get("/submit", isAuthenticated , (req, res) => {
        res.render("submit")
    });

    app.get("/reviews", (req, res) => {
        res.render("reviews")
    });
    
    app.get("/signup", (req, res) => {
        res.render("signup")
    });

    app.get("/login", (req, res) => {
        res.render("login")
    });
}