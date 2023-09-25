const express = require('express');
const router = express.Router();
const FavoritesController = require('../controllers/FavoritesController')

router.post('/api/addToFavorites',FavoritesController.addToFavorites);
router.get('./api/getAllFavorites', FavoritesController.getUserFavoriteList);
router.delete('api/removeFromFavorites', FavoritesController.removeFromFavorites);


module.exports=router;