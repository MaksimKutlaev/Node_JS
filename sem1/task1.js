const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });
        res.end('<h1>Сервер работает</h1>')
    } else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        });
        res.end('<h1>About</h1>')
    }
})

server.listen(3000);