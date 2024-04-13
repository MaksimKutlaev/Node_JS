const http = require('http');
let counterVisitStart = 0;
let counterVisitAbout = 0;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });
        counterVisitStart++;
        res.end(`<h1>Start page</h1>
        <a href="/about">About</a>
        <p>Counter Visit ${counterVisitStart}</p>`);
    } else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });
        counterVisitAbout++;
        res.end(`<h1>About</h1>
        <a href="/">Start page</a>
        <p>Counter Visit ${counterVisitAbout}</p>`);
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html; charset=UTF-8"
        });
        res.end(`<h1>404</h1>
        <br>
        <h3>Page not found</h3>`);
    }
});

server.listen(3000);