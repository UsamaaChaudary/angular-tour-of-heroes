const express = require('express');
const route = express.Router();
const data = require('./data');


route.get('/',(req,res)=>
{
    res.status(200).json({
        data :data
    })
});

route.post('/',(req,res)=>
{
    hero = req.body.hero;
    data.push(hero);
    res.json({data:data});
});

route.delete('/delete' , (req,res)=>
{
    data.pop();
    res.json({data:data})
});



module.exports = route;