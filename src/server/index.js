const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.use(express.static(path.join(__dirname, '../..', 'dist')));

const server = new http.createServer(app);

server.listen(8080);
console.log('Server running at http://127.0.0.1:8080');
