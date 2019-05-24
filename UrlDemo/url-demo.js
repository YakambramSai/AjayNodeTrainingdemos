var url = require('url');

var address='http://localhost:8888/user?fname=Sachin&lname=Tendulkar';
var q = url.parse(address, true);
console.log("host:"+q.host);
console.log("pathname:"+q.pathname);
console.log("search: "+q.search);
var qdata = q.query;
console.log(qdata.fname);
console.log(qdata.lname);