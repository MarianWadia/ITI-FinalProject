
const express = require('express')
var mongoose = require('mongoose')
var Clothes = require('./models/ClothModel');
var cors = require('cors');
const exp = require('constants');
var server = express()

server.use(express.urlencoded({extended:true}))

server.use(express.json())
server.use(cors())
//connect to DataBase
mongoose.connect('..link database')
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("error connecttion");
});
//All Products
server.get('/products',function(req,res){
    
    Clothes.find()
    .then((productData)=>{
        console.log(productData)
        res.send(productData)
    })
    .catch((err)=>{
        res.send({
            error:'Error getting product'
        })
    })
});

server.listen(3002,function(){
    console.log("Server connected");
})