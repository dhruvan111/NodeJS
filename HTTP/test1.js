const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/content'){
        console.log('in content page.');
        res.end('This is content page.');
    }
    else if (req.url === '/about'){
        console.log('in about page.');
        res.end('This is about page.');
    }
    else if (req.url === '/'){
        console.log('in home page.');
        res.end('Hello this is Home page.');
    }
    else{
        res.end(`<h1>Oops!</h1>
        <p>This page doesn't exists.</p>
        <a href = "/">back to home</a>`);
    }    
})
server.listen(8000);
