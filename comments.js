// Create web server

// Import required modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comments = require('./comments.json');

// Create server
http.createServer(function (req, res) {
    // Parse the request containing file name
    const pathname = url.parse(req.url).pathname;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/html
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // Page found
            // HTTP Status: 200 : OK
            // Content Type: text/html
            res.writeHead(200, {'Content-Type': 'text/html'});

            // Write the content of the file to response body
            res.write(data.toString());
        }
        // Send the response body
        res.end();
    });
}).listen(8080);

// Console will print the message
console.log('Server running at http://');