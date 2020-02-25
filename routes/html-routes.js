var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

module.exports = function(app) {

    app.get("/", (req, res) => {
        if(req.user){
            console.log
            res.render("submit")
        }else{
            res.render("index")
        }
    });
    
    app.get("/submit", isAuthenticated , (req, res) => {
        res.render("submit")
    });

    app.get("/reviews", (req, res) => {
        console.log('rendering reviews')
        res.render("index")
    });

    app.get("/review", (req, res) => {
        db.Movie.findAll({}).then(data=>{
           let info = data[data.length-1].dataValues
            res.render("review", info)
        })
    });
    
    app.get("/signup", (req, res) => {
        res.render("signup")
    });

    app.get("/login", (req, res) => {
        res.render("login")
    });

}