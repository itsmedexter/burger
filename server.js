var express = require("express");
// var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var burgerRoutes = require("./controllers/burgers_controller.js");

app.use("/", burgerRoutes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
