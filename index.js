const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);


const server = http.createServer((req,res)=>{

    console.log("Access into server")
    const pathName = url.parse(req.url, true).pathname;

    const id = url.parse(req.url, true).query.id;

    if(pathName === '/products' || pathName === '/' ){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end("This is the products page");

    }else if(pathName === '/laptop' && id < laptopData.length){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(`This is the laptop page for laptop ${id}`);
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('Url Not Found!!');
    }
   

    
});

server.listen(1337,'localhost', ()=>{
    console.log("Server listening for requests");
});


