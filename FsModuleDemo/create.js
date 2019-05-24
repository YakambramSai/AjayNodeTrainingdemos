
var fs = require('fs');
//w , a ,r
//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'a', function (err, file) {
  if (err) throw err;

    fs.write(file,"Hello Ajay \n",function(err){
        if(err) throw err;
        console.log("File created!")
    });

  
});