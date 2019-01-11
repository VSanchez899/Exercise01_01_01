
//requires the file system for the variable
var fs = require('fs');

function phoneNumber(err, data){
    console.log("data: ", data);
}

fs.readdir('/', phoneNumber);


console.log("this code is executed last!");

//remember Fn+F8
// echo $PATH