//Author: Vincent Sanchez
//File name: read-demo.js
//Title: read demo 1
//Exercise/Project Number: Exercise01_01_01

var fs = require("fs");

// this is telling the terminal what type of file it is
fs.readFile('./data1.json', 'utf-8', function(err, data){
    console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
});