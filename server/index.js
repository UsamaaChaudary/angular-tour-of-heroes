const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const port = 3000;
const heroesRoute = require('./heroes');

server.listen(port,(err)=>
{
    if(err)
    {
        console.log("following error occured : " + err);
    }
    else
    {
        console.log("server listening on : 3000 ");
    }
});

// app.use('',(req,res)=>
// {
//     res.json({messgae : "Home"});
// });

app.use('/', heroesRoute);