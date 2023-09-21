const express=require('express');
const router = express.Router();
const clothesController=require('../controllers/ClothesController');


router.post('/api/clothes',clothesController.createNewCloth)
router.get('/api/clothes',clothesController.getAllClothes)
router.get('/api/clothes/:id',clothesController.getClothById)
router.patch('/api/clothes/:id',clothesController.updateCloth)
router.delete('/api/clothes/:id',clothesController.removeCloth)
router.get('/api/clothesByCategory/:category',clothesController.findByCategory)



module.exports = router;