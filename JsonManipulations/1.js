var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


var obj = JSON.parse(text);

console.log(obj.employees[0].firstName);
console.log(obj.employees[1].firstName);
console.log(obj.employees[2].firstName);

var str = JSON.stringify(obj);
console.log(str);