const mongoose = require('mongoose');

userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,

    },
    secondName:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    favourites:{
        type:[String],
        required:true,
        default:[],
    },
    cartItems:{
        type:[{title:String,price:Number,id:String,numberOfItems:Number}],
        required:true,
        default:[],
    }
})

module.exports = mongoose.model('Users',userSchema)