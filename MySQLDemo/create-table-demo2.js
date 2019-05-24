const mysql = require('mysql');
//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
  });

  //connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
  });
   
function createTable(){
    var sql = "CREATE TABLE user-demo(id int(11) NOT NULL AUTO_INCREMENT,"+
    "fname varchar(20) DEFAULT NULL,"+
    "lname varchar(20) DEFAULT NULL,"+
    "PRIMARY KEY (id)) ";   
    let query = conn.query(sql, (err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });

}
 
 createTable();
