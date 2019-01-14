//Author: Vincent Sanchez
//File name: write-file-demo
//Title: 
//Exercise/Project Number:

var fs = require('fs');

var jsonstring = {
    "name": "Jake",
    "age": 70
}
//when this runs it creates a file with the variable string 'jsonstring' written within it
fs.writeFile('./data2.json', JSON.stringify(jsonstring), function (err) {
    //if this function fails it will write an error to the console
if (err) {
    console.log(err);
}
});
