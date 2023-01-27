const http = require('http');

const server = http.createServer( async (req, res) => {
    if (req.url === '/') {
        res.end("Routh: /");
    }

    if (req.url === '/about') {
        res.end("Routh: /about");
    }

    res.end("<h1>GAAA</h1>");
    
});

server.listen(3000);