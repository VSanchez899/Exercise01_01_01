//Author: Vincent Sanchez
//File name: read-directory-demo.js
//Title: 
//Exercise/Project Number:
//
var fs = require('fs');


fs.readdir('/', function (err, data) {
    console.log(data);
});
