const url = require('url');
const path = require('path');
const querystring = require('querystring');

const result = url.parse("http://127.0.0.1:8080/learn/program-center/student?username=xiaoming&sex=male&age=22#hash");
console.log(result);

console.log(path.parse(result.path));

console.log(querystring.parse(result.query));

