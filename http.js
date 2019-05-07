const http = require('http');
const app = http.createServer((req, res) => {
    console.log(req.headers);
    console.log('httpVersion: ' + req.httpVersion);
    console.log('method: ' + req.method);
    console.log('rawHeaders: ' + req.rawHeaders);
    console.log('url: ' + req.url);
    res.end("Hello World!");
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');