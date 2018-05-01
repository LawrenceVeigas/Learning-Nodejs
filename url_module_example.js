var url = require('url');
var adr = "https://localhost:8080/default.html?year=2019&month=may";

var q = url.parse(adr);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);