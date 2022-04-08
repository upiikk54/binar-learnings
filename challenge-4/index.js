// // Express Js
// const http = require("http");
// const fs = require("fs");
// const path = require('path');
// const express = require('express');
// const res = require("express/lib/response");
// const app = express();
// const port = 8087;

// app.use(express.static(__dirname + "/public"))

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + "/public/landingpage.html"))
// })

// app.get('/cari', function (req, res) {
//     res.sendFile(path.join(__dirname + "/public/cari_mobil.html"))
// })

// app.listen(port, () => {
//     console.log(`listening on http://localhost:${port}`);
// })

// node js native
const http = require("http");
const {
    PORT = 8087
} = process.env; // Ambil port dari environment variable
const HOST = "localhost";

const fs = require("fs");
const path = require("path");

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
function onRequest(req, res) {
    const url = req.url;
    if (url === "/") {
        fs.readFile("./public/landingpage.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    } else if (url === "/caro_mobil.html" || url === "/cari") {
        fs.readFile("./public/cari_mobil.html", "UTF-8", function (err, html) {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    } else if (url === "/getcars") {
        const dataPath = path.join(__dirname, "./data", "/car.json");
        const fileStream = fs.createReadStream(dataPath, "UTF-8");
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        fileStream.pipe(res);
    } else if (url.match(".css$")) {
        const cssPath = path.join(__dirname, "./public", url);
        const fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {
            "Content-Type": "text/css"
        });
        fileStream.pipe(res);
    } else if (url.match(".png$")) {
        const imagePath = path.join(__dirname, "./public", url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {
            "Content-Type": "image/png"
        });
        fileStream.pipe(res);
    } else if (url.match(".jpg$")) {
        const imagePath = path.join(__dirname, "./public", url);
        const fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {
            "Content-Type": "image/jpg"
        });
        fileStream.pipe(res);
    } else if (url.match(".js$")) {
        const jsPath = path.join(__dirname, "./public", url);
        const fileStream = fs.createReadStream(jsPath);
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        });
        fileStream.pipe(res);
    } else {
        fs.readFile("./public/404.html", "UTF-8", function (err, html) {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }
}

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server already listening on http://${HOST}:${PORT}`);
});