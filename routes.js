const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
const method=req.method;
    if(url==='/')
    {
        const storedData=fs.readFileSync('data.text','utf8');

        res.write(`<html><head><title>my nodejs app</title><body><p>${storedData} <form action="/message" method="POST"><input type="text" name="inputData"><input type="submit" value="send"></form></body></html>`);
        return res.end();
    }
    else if(url==='/message' && method==='POST')
    {
        const body=[];
        req.on('data',(chunk)=>{
        
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const parsedData=parsedBody.split('=')[1];
           
            fs.writeFile('data.text',parsedData,err=>{
                res.statusCode=302;
        res.setHeader('location','/');
        return res.end();

            });
         
        });
        
       
       
    }

};
//module.exports=requestHandler;
// module.exports={
//     handler:requestHandler,
//     someText:'some hard coded text'
// }
module.exports.handler=requestHandler;