var express = require('express')
var mongoose=require('mongoose')

var route=require('./route')
var bodyparser = require('body-parser')   

mongoose.connect("mongodb://localhost:27017/products").then(()=>{
    
 console.log("DB connected");
 var app=express();
 app.use('/api',route)
 app.use(bodyparser.urlencoded({extended:false }));
//  app.get('/', (req,res)=>{
//     res.sendFile('index.html',{root:__dirname});
// })
 app.listen((process.env.PORT||3000),()=>{
    console.log('server started')
})
}).catch((e)=>{
console.log(e.toString())
})
