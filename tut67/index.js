const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./home.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contacts = fs.readFileSync('./contacts.html');


const server = http.createServer((req,res) =>{
    console.log(req.url);
    url = req.url;


    res.statusCode = 200;
    res.setHeader('content-type','text/html');

    if(url == '/'){
        res.end(home);
    }

    else if(url == '/about'){
        res.end(about);
    }
    
    else if(url == '/services'){
        res.end(services);
    }

    else if(url == '/contacts'){
        res.end(contacts);
    }

    else{
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});