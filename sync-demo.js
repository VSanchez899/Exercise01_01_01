
//Author: Vincent Sanchez
//File name: sync-demo.js
//Title: sync demo
//Exercise/Project Number: Exercise01_01_01


//requires the file system for the variable
var fs = require('fs');

var data = fs.readdirSync('/');
console.log("data: ", data);

console.log("this code is executed last!");

//remember Fn+F8
// echo $PATH