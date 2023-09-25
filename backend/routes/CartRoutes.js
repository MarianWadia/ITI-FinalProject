const express=require('express');
const router = express.Router();
const cartController=require('../controllers/CartController');

router.post('/api/addToCart', cartController.addToCart);
router.post('/api/updateQuantity', cartController.updateQuantity);
router.post('/api/removeFromCart', cartController.removeItem);


module.exports=router;