//Author: Vincent Sanchez
//File name: 
//Title: 
//Exercise/Project Number:

var fs = require("fs");

// this is telling the terminal what type of file it is
fs.readFile('./data1.json', 'utf-8', function(err, data){
    console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
});