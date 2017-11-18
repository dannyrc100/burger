// Required dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Set up Express app
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

// Set up Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use Handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});