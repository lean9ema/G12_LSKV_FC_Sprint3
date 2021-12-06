const express = require('express'); 
const controllers=require('../controllers/homeControllers')
const router = express.Router();

// Acá definimos las rutas
router.get('/', controllers.index);

module.exports = router;
