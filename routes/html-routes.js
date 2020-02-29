var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

module.exports = function(app) {
    app.get("/", (req, res) => {
        if(req.user){
            res.render("submit")
        }else{
            db.Movie.findAll({order:[['id', 'DESC']], limit: 9}).then(data => {
                console.log('rendering reviews')
                let info = []
                for (let i = 0 ; i <= 8; i++){
                    info.push(data[i].dataValues)
                }
                res.render("index", {reviews: info})
            })
        }
    });
    
    app.get("/submit", isAuthenticated , (req, res) => {
        res.render("submit")
    });
    
    app.get("/booksubmit", isAuthenticated , (req, res) => {
        res.render("booksubmit")
    });

    app.get("/reviews", (req, res) => {
        db.Movie.findAll({order:[['id', 'DESC']], limit: 9}).then(data => {
            let info = []
            for (let i = 0 ; i <= 8; i++){
                info.push(data[i].dataValues)
            }
            res.render("reviews", {reviews: info})
        })
    });

    app.get("/review", (req, res) => {
        db.Movie.findAll({}).then(data=>{
           let info = data[data.length-1].dataValues
            res.render("review", info)
        })
    });
    
    app.get("/bookreview", (req, res) => {
        db.Book.findAll({}).then(data=>{
           let info = data[data.length-1].dataValues
            res.render("bookreview", info)
        })
    });

    app.get("/signup", (req, res) => {
        res.render("signup")
    });

    app.get("/login", (req, res) => {
        res.render("login")
    });

}