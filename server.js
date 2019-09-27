var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 8000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});