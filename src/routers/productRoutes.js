const express = require('express'); 
const productController = require('../controllers/productController');
const router = express.Router();

// Acá definimos las rutas
router.get('/productDetail/:productId', productController.prodDetail );
router.get('/productList',productController.list)

module.exports = router;