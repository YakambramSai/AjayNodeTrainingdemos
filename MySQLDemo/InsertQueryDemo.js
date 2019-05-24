var mysql=require('mysql');
var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test'
});
var insertRecord = 'INSERT INTO user(fname,lname) VALUE(?,?)';
pool.getConnection(function(err, connection){
    connection.query(insertRecord, ['Ajay', 'Tandley'], function(err, result){
       if(err) throw err;
       else{
           console.log("One row is inserted:"+result);
       }

   });
   connection.release();

});