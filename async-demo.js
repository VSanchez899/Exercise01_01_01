
//requires the file system for the variable
var fs = require('fs');

function phoneNumber(err, data){
    console.log("data: ", data);
}
//this runs a function for the call back the read through the entire file system directory
fs.readdir('/', phoneNumber);


console.log("this code is executed last!");


// echo $PATH