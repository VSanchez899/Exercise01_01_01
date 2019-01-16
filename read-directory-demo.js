//Author: Vincent Sanchez
//File name: read-directory.js
//Title: read directory
//Exercise/Project Number: Exercise01_01_01
//
var fs = require('fs');


fs.readdir('/', function (err, data) {
    console.log(data);
});
