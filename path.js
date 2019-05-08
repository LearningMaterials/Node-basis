const path = require('path');
const myPath = '/learn/program-center/student/index.html';
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));