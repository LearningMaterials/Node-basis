const querystring = require('querystring');

console.log(querystring.parse('username=xiaoming&pass=123&age=male'));
console.log(querystring.stringify({username: 'xiaoming', pass: '123', age: 'male'}));
