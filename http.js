const http = require('http');
const app = http.createServer((req, res) => {
    console.log(req.headers);
    console.log('httpVersion: ' + req.httpVersion);
    console.log('method: ' + req.method);
    console.log('rawHeaders: ' + req.rawHeaders);
    console.log('url: ' + req.url);
    console.log('referer: ' + req.headers.referer);
    res.end("Hello World!");
});

app.listen(8080);
console.log('Server running at http://127.0.0.1:8080/');