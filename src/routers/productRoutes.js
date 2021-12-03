const express = require('express'); 
const router = express.Router();

const productController = require('../controllers/productController');


// Acá definimos las rutas
router.get('/productDetail/:productId', productController.prodDetail);


module.exports = router;