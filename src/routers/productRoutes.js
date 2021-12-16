const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Acá definimos las rutas
router.get('/productList',productController.list)
router.get('/charger',productController.charger)
router.get('/edition',productController.edition)
router.get('/productDetail/:productId', productController.prodDetail );
router.get('/productCart' ,productController.prodCart1 );
router.get('/productCart2',productController.prodCart2 );
router.get('/productCart3',productController.prodCart3 );
router.get('/productCart4',productController.prodCart4 );


module.exports = router;