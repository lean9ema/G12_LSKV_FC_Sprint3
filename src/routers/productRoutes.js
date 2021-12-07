const express = require('express'); 
const productController = require('../controllers/productController');
const router = express.Router();

// Acá definimos las rutas
router.get('/productList',productController.list)
router.get('/charger',productController.charger)
router.get('/productDetail/:productId', productController.prodDetail );


module.exports = router;