import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // console.log(req.url);
    // res.end('Hello World Node js !');



    // Handling url routing
    
    // if (req.url === '/') {
    //     res.end('Welcome to Home Page');
    // } else if (req.url === '/about') {
    //     res.end('Welcome to About Page');
    // } else if (req.url === '/contact') {
    //     res.end('Welcome to Contact Page');

    // } else if (req.url === '/profile') {
    //     res.end('Welcome to Profile Page');
    // }


    // else {
    //     res.end('404 Page Not Found!');
    // }



    // Handling  Different HTTP request
    // if(req.method === 'GET'){
    //     res.end('GET Method');
    // } else if(req.method === 'POST'){
    //     res.end('POST Method');
    // } else{
    //     res.end('Method Not Allowed');
    // }


    // Serving HTML Content
    // res.end(`<h1>Home Page</h1>`)

    // Serving JSON Content
    // const data = {
    //     message : "Hello World",
    //     status : "Success"
    // };

    // res.end(JSON.stringify(data));

});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});