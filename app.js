const express = require('express');
const app = express();
const fs =require('fs');
const os = require('os');
var systemName = os.cpus();
var computerType = os.platform();
var ram = os.totalmem()/1024/1024/1024;
fs.writeFileSync('my.txt','Computer Name:'+computerType+'\
\nTotal Ram:'+ram+' GB');
app.get("/",(req,res)=>
{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h1>Home Page</h1>");
    //console.log(myFile);
    res.send();
});
app.listen(8080,()=>
{
    console.log("server Running");
});