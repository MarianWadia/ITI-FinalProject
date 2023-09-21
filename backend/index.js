const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const clothesRoute = require('./routes/ClothesRoute')
const userRoute=require('./routes/UsersRoute')
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/ItiClothes')
app.use(express.json());
app.use(clothesRoute)
app.use(userRoute)





app.listen(3001,()=>{
    console.log('listening')
})