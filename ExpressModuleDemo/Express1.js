const express = require('express');
var app = express ();
app.get('/', (request, response)=>{
   response.send('Hello World');
});

var server=app.listen(3000, ()=>{ });