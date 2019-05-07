const url = require('url');
const result = url.parse("http://user:pass@school.thoughtworks.cn:8080/learn/program-center/student?query=string#hash");
console.log('host: ', result.host);
console.log('search: ', result.search);
console.log(result);