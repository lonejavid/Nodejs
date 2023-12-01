const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('request url:',req.url);
    console.log('reuest headers:',req.headers);
    console.log('request method:',req.method);
});
server.listen(5000,'localhost');