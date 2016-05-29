var express = require('express');
var app = express();
var port = 1235;

app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(port, function() {
    console.log("Server up and running at port " +port);
});