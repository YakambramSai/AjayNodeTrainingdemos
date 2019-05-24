
// If you face ER_NOT_SUPPORTED_AUTH_MODE error
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

var mysql=require('mysql');

var pool =  mysql.createPool({
    host : 'localhost',
    user : 'root',
    password: 'root',
    database: 'test'
    });

var createTable = "CREATE TABLE user(id int(11) NOT NULL AUTO_INCREMENT,"+
    "fname varchar(20) DEFAULT NULL,"+
    "lname varchar(20) DEFAULT NULL,"+
    "PRIMARY KEY (id)) ";   

pool.getConnection(function(err, connection){

    connection.query(createTable, function(err, results){
         if(err) throw err;
         else{
            console.log("Table created!."+results);
         }
     });

     connection.release();
});    


