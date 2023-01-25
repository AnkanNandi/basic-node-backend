// Importing the nessesary modules.
const http = require("http");
const fs = require("fs");

// port to listen when server is online
const port = 3000;

//open server
http
    .createServer((req, res) => {
        if (req.url === "/") {
            fs.readFile("src/index.html", function (err, page) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(page);
                return res.end();
            });
        } else if (req.url === "/about") {
            fs.readFile("src/about-me.html", function (err, page) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(page);
                return res.end();
            });
        } else if (req.url === "/contact") {
            fs.readFile("src/contact.html", function (err, page) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(page);
                return res.end();
            });
        } else {
            fs.readFile("src/404.html", function (err, page) {
                if (err) throw err;
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(page);
                return res.end();
            });
        }
    })
    .listen(port, () => {
        console.log(`Listeninig on port ${port}\nType localhost:${port} on browser!`);
    });
