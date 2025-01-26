const http = require ('http');

const port = process.env.PORT || 5009;

const server = http.createServer((req, res)=>{
    console.log(req)
    res.statusCode=200;
   
    res.setHeader('Content-Type','text/html');
    res.end(`<h1>Server in node js</h1><p>This is a demonstration of server in node js</p>`)
})

server.listen(port,()=>{
    console.log(`Server is listening on port : ${port}`)
});