//Author: Vincent Sanchez
//File name: 
//Title: 
//Exercise/Project Number:


var express = require('express');
var app = express();

// this is the specific prot for it to be hosted on
var port = 8080;
//
app.use(express.static(__dirname));
// this listens for the port
app.listen(port, function() {
   console.log("Server listening on local host:%s", port);
});
