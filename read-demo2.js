//Author: Vincent Sanchez
//File name: 
//Title: 
//Exercise/Project Number:

// var fs = require("fs");

// this is telling the terminal what type of file it is
// fs.readFile('./data1.json', 'utf-8', function(err, data){
//      console.log(data);
//      data = JSON.parse(data);
//      console.log(data.name);
//  });

//this sets the var of data to have a method with name
var data = require('./data1.json');

console.log(data.name);