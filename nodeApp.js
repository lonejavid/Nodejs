const http= require('http');
const server=http.createServer((req,res)=>{

const url=req.url;

 if(url==='/home')
{
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1> Welcome to Homepage</h1></body>');
    res.write('<html>');
   return res.end();
}
else if(url==='/about')
{
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body> Welcome to About us Page</body>');
    res.write('<html>');
   return res.end();
}
else if(url==='/node')
{
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body> Welcome to my Nodejs Project</body>');
    res.write('<html>');
   return res.end();
}

res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1> this is from node app</body>');
res.write('<html>');
res.end();
})
server.listen(3000)