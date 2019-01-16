//Author: Vincent Sanchez
//File name: 
//Title: 
//Exercise/Project Number:

var express = require('express');

var app = express();
var fs = require('fs');
//this is what port the server will be hosted on
var port = 8080;

app.use('/message', function name(req, res) {
    //this tell the console that the user has requested an end point
    console.log("user requested an endpoint!")    
    res.send("<h2>Hello from the server endpoint!</h2>");
});
//when the user look for the user end point it will trigger the app listen telling the console that the user want a certain page or set of information
app.use('/users', function(req, res){
    fs.readFile('./data2.json', 'utf-8', function(err, data){
        res.send(data);
    });
})

app.listen(port, function(){
    console.log("Server listening on local host:%s", port)
})