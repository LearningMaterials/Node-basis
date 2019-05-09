const url = require('url');
const result = url.parse("http://school.thoughtworks.cn/learn/program-center/student?query=string#hash");
console.log('host: ', result.host);
console.log('search: ', result.search);
console.log(result);