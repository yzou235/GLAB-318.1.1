// `npm init` command to create a package.json file which contains information used to identify the project and handle dependencies

// `npm init -y` -y flag to generate a default package

// create alias command in package.json

///////////////////////////////
// Part 4: Creating a Server //
///////////////////////////////

// Step 1: import or require the http module into your Node.js application. This step allows you to use the functionality provided by the http module in your code.
const http = require('http');
const fs = require('fs'); //fs module provides functions for interacting with the file system on your computer

// Step 2: define the location and port of the server using local address
const hostname = '127.0.0.1';
const port = 3000;

// Step 3: createServer method -- define how the server will behave
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end('Hello World!\n');
// });

const server = http.createServer((req, res) => {
    const url = req.url;
    switch(url) {
        case '/':
            // Home Page
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('Hello World!\n');
            break;
        
        case '/about':
            // About Page
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color: red">About Us</h1><h4>yeah</h4>');
            const imagePath = 'about-us-icon.jpg';
            const image = fs.readFileSync(imagePath);
            res.write(`<img src="data:image/jpg;base64,${image.toString('base64')}" alt="About Us Image">`);
            res.write('<p>This is the about page.</p>');
            res.end();
            break;
        
        case '/feedback':
            // Feedback Form
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1 style="color: Blue">Feedback Form</h1>');
            res.write('<form method="post" action="/submit-feedback">');
            res.write('<label for="feedback">Your Feedback:</label><br>');
            res.write('<textarea id="feedback" name="feedback" rows="4" cols="50"></textarea><br>');
            res.write('<input type="submit" value="Submit Feedback">');
            res.write('</form>');
            res.end();
            break;
        
        default:
            // Handle other routes or 404 Not Found
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
            break;
    }
});

// Step 4: tell the server to listen
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
