const http = require('http');
var fileSystem = require('fs');
http.createServer( (request, response)=>{
function getEmployeeDetails(){
   let data=""; 
   http.get('http://dummy.restapiexample.com/api/v1/employees', (res)=>{
       res.on('data', (chunk)=>{
           data+=chunk;
       });
      res.on('end', ()=>{
           var result= JSON.parse(data);
           var rs="";
           result.forEach((employee)=>{
               console.log(employee.id+" "+employee.employee_name+" "+employee.employee_age+"\n");
             rs+=employee.id+" "+employee.employee_name+" "+employee.employee_age+"\n";
            });
            response.end(rs);
    });
         
   }).on('error', (err)=>{
       console.log("Error message:"+err.message);
   });
}

getEmployeeDetails();
} ).listen(8888);
