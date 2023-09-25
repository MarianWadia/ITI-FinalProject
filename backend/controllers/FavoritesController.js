const Favorite = require('../models/FavoritesModel');

exports.addToFavorites = async (req, res)=>{
    const { userId, itemId } = req.body;
    try {
        // Check if the item is already in the favorites list
        const favorite = await Favorite.findOne({userId});
        if(!favorite){
            //create new favorites list
            const newFavorites = new Favorite({userId, items: [itemId]})
            await newFavorites.save();
        }else{
            // Add the item to the existing favorites list if not already present
            if(!favorite.items.includes(itemId)){
                favorite.items.push(itemId);
                await favorite.save();
            }
            res.status(201).json({ message: 'Item added to favorites' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Retrieve a user's favorites list
exports.getUserFavoriteList = async(req, res) => {
    const userId = req.params.userId;
    try {
        const favorite = await Favorite.findOne({userId}).populate('items');
        if (!favorite) {
            return res.status(404).json({ message: 'Favorites list not found' });
        }
        res.status(200).json(favorite.items);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.removeFromFavorites = async (req, res)=>{
    const { userId, itemId } = req.body;
    try {
        const favorite = await Favorite.findOne({userId});
        favorite.items =  favorite.items.filter(item => item.itemId !== itemId);
        await favorite.save();
         res.status(201).json({ message: 'Item deleted from favorites' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}