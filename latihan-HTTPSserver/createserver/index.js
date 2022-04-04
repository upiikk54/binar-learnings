const http = require("http");
const fs = require("fs");
const path = require("path");

const HOST = "127.0.0.1";
const PORT = "8085";
const PUBLIC_DIRECTORY = path.join(__dirname, "public");
const DATA_DIRECTORY = path.join(__dirname, "data");

function onRequest(req, res, next) {
    const urlRaw = req.url;
    const url = urlRaw.split("&")[0];
    const query = urlRaw.split("&")[1];

    switch (url) {
        case "/":
            const htmlFileIndex = path.join(PUBLIC_DIRECTORY, "index.html");
            const htmlIndex = fs.readFileSync(htmlFileIndex, "utf-8");
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(htmlIndex);
            break;
        case "/login":
            const htmlFileLogin = path.join(PUBLIC_DIRECTORY, "login.html");
            const htmlLogin = fs.readFileSync(htmlFileLogin, "utf-8");
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(htmlLogin);
            break;
        case "/json":
            const datajson = path.join(DATA_DIRECTORY, "data.json");
            const readdata = fs.readFileSync(datajson, "utf-8");
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(readdata);
            break;
            // case "/json":
            //     const person = {
            //         name: "luthfi",
            //         age: 21,
            //     };

            //     const personJSON = JSON.stringify(person);

            //     res.setHeader("Content-Type", "application/json");
            //     res.writeHead(200);
            //     res.end(personJSON);
            //     break;
        case "/search":
            const queryResult = query.split("=")[1];
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(`Halaman Pencarian: ${queryResult}`);
            break;
        default:
            break;
    }


}

const server = http.createServer(onRequest);

server.listen(PORT, HOST, () => {
    console.log(`Server berjalan di http://${HOST}:${PORT}`);
})