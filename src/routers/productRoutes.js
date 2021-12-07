const express = require('express'); 
const productController = require('../controllers/productController');
const router = express.Router();

// Acá definimos las rutas
router.get('/productList',productController.list)
<<<<<<< HEAD
router.get('/charger',productController.charger)
=======
router.get('/productDetail/:productId', productController.prodDetail );

>>>>>>> a92a023edb1057155ae82d73db3f86dd1a209f2e

module.exports = router;