const express=require('express');
const router = express.Router();
const clothesController=require('../controllers/ClothesController');


router.post('/api/products',clothesController.createNewCloth)
router.get('/api/products', clothesController.getAllClothes);
router.get('/api/products/:id',clothesController.getClothById)
router.patch('/api/clothes/:id',clothesController.updateCloth)
router.delete('/api/products/:id',clothesController.removeCloth)
router.get('/api/clothesByCategory/:category',clothesController.findByCategory)



module.exports = router;