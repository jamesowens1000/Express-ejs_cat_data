var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/cats", function(request, response) {
    response.render("cats");
})

app.get("/cheetah", function(request, response) {
    var cat_data = [
        {name: "Cheetah", favorite_food: "gazelle meat", age: 4, sleeping_spots: ["in the sunlight", "up in a tree"], image: "../images/cheetah.jpg"}
    ];
    response.render("details", {cat: cat_data});
})
app.get("/panther", function(request, response) {
    var cat_data = [
        {name: "Panther", favorite_food: "antelope", age: 2, sleeping_spots: ["sunny grasslands", "in a dark forest", "swamplands"], image: "../images/panther.jpg"}
    ];
    response.render("details", {cat: cat_data});
})
app.get("/tiger", function(request, response) {
    var cat_data = [
        {name: "Tiger", favorite_food: "water buffalo", age: 3, sleeping_spots: ["in a soft are of grass", "a soft rock", "next to the body of the last kill"], image: "../images/tiger.jpg"}
    ];
    response.render("details", {cat: cat_data});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})