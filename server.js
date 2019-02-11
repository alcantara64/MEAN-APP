const express = require('express')
const mongoose = require('mongoose');
const app = express();
let port = 8000;


app.get('/', function(req,res,next) {
    res.json({
        confirm:'yes we are live',
         result:req.params.id
    })
    
});

app.listen(process.env.port||port,function(){
    console.log(`the app is running on port ${port}`);
}
)