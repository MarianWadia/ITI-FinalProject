const express=require('express');
const router = express.Router();
const cartController=require('../controllers/CartController');

router.post('/api/addToCart', cartController.addToCart);
router.put('/api/updateQuantity', cartController.updateQuantity);
router.get('/api/getUserCart/:userId', cartController.getUserCart);
router.delete('/api/removeFromCart/:userId/:productId', cartController.removeItem);


module.exports=router;