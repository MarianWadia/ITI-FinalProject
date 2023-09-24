
// const express = require('express')
// var mongoose = require('mongoose')
// var Clothes = require('./models/ClothModel');
// var cors = require('cors');
// const exp = require('constants');
// var server = express()

// server.use(express.urlencoded({extended:true}))

// server.use(express.json())
// server.use(cors())
// //connect to DataBase
// mongoose.connect('..link database..')
// .then(()=>{
//     console.log("Connected to database");
// })
// .catch((err)=>{
//     console.log("error connecttion");
// });
// //All Products
// server.get('/products',function(req,res){
    
//     Clothes.find()
//     .then((productData)=>{
//         console.log(productData)
//         res.send(productData)
//     })
//     .catch((err)=>{
//         res.send({
//             error:'Error getting product'
//         })
//     })
// });

// //ADD Product 
// server.post("/products", function (req, res) {
//     let productData = req.body;
//     let newProduct = new Clothes({
//       title: productData.title,
//       price: +productData.price,
//       description: productData.description,
//       category: productData.category,
//       image: productData.image,
//     });
  
//     newProduct
//       .save()
//       .then((msg) => {
//         console.log("ADD SUCCESSFULLY");
//         res.send({
//           msg: "product added successfully",
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).send({
//           error: "Error adding product",
//         });
//       });
//   });
  
// //Delte Product 
// server.delete("/products/:id",function(req,res){
   
//   let prodId = +req.params.id;
//   Clothes.deleteOne(
//       {id:prodId}
//   ).then((msg)=>{
//     console.log("Delete Successfully")
//       res.send({
        
//           msg: "product Deleted successfully"
//       })
//   }).catch((err)=>{
//       console.log(err)
//   })

// })

// server.listen(3002,function(){
//     console.log("Server connected");
// })




const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const clothesRoute = require('./routes/ClothesRoute')
const userRoute=require('./routes/UsersRoute')
const app = express();
mongoose.connect('mongodb+srv://hiba30018:Iohsm12345@cluster0.a9hr7hq.mongodb.net/final')
.then(()=>{
    console.log("Connected to database");
})
.catch((err)=>{
    console.log("error connecttion");
});
app.use(cors()); // Use CORS middleware first
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(clothesRoute);
app.use(userRoute);



app.listen(3000,()=>{
    console.log('listening')
})