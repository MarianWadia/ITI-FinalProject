const Cart = require('../models/CartModel');




exports.addToCart = async (req, res)=>{
    const { userId, productId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        // Check if the product is already in the cart
        const existingItem = cart.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity+=quantity;
        } else {
            cart.items.push({productId, quantity});
        }
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Could not add item to cart' });
    }
}

exports.updateQuantity= async (req, res)=>{
    const { userId, productId, quantity } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        const cartItem = cart.items.find(item => item.productId == productId);
        if (cartItem) {
            cartItem.quantity = quantity;
            await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ error: 'Item not found in cart' });
        }
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        res.status(500).json({ error: 'Could not update cart item quantity' });       
    }
}


// Get the user cart 
exports.getUserCart= async (req, res)=>{
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.json({ error: 'Cart not found' });
        }else{
            res.status(200).json(cart);
        }
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        res.status(500).json({ error: 'Could not update cart item quantity' });       
    }
}


// Remove an item from the cart
exports.removeItem = async (req, res) => {
    const { userId, productId } = req.params;
    console.log(productId)
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        const updatedItems = cart.items.filter(item => item.productId != productId);
        console.log(updatedItems)
        cart.items = updatedItems;
        await cart.save();
        res.status(200).json(cart.items);
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ error: 'Could not remove item from cart' });
    }
}