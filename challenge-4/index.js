const http = require("http");
const fs = require("fs");
const path = require('path');
const express = require('express');
const res = require("express/lib/response");
const app = express();
const port = 8087;

app.use(express.static(__dirname + "/public"))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/landingpage.html"))
})

app.get('/cari', function (req, res) {
    res.sendFile(path.join(__dirname + "/public/cari_mobil.html"))
})

app.listen(port, () => {
            console.log(`listening on http://localhost:${port}`);
            })