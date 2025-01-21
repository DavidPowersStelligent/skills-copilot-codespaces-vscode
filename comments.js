// Create web server and listen to port 8080
// To run this code, run node comments.js in the terminal
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const name = query.name;
    const comment = query.comment;
    const date = new Date();
    const dateString = date.toISOString();
    const result = `${dateString} ${name}: ${comment}\n`;

    console.log(result);
    fs.appendFile('comments.txt', result, (err) => {
        if (err) {
            console.error(err);
        }
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Your comment has been saved');
});

server.listen(8080, '