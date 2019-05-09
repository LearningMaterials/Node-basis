const querystring = require('querystring');

console.log(querystring.parse('username=xiaoming&sex=male&age=22'));
console.log(querystring.stringify({username: 'xiaoming', sex: 'male', age: '22'}));
