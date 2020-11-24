const express = require('express');
const fs = require('fs');

const thumbnailPath = "./public/thumbnail";
const dataPort = 3005;
const app = express();

function readdirData(dirPath) {
    return fs.readdirSync(dirPath);
}

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(readdirData(thumbnailPath));
})

app.listen(dataPort);
