
//requires the file system for the variable
var fs = require('fs');

fs.readdir('/', function(){
    console.log("data: ", data);
});


//this is anonymous function that runs the when their is a call back


console.log("this code is executed last!");

//remember Fn+F8
// echo $PATH