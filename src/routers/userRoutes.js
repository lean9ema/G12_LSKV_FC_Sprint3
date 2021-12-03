const express = require('express'); 
const usersController = require('../controllers/usersController.js');
const router = express.Router();

router.get('/login',usersController.login);
router.get('/register',usersController.register);
router.get('/productCart',usersController.prodCart1);
router.get('/productCart2',usersController.prodCart2);
router.get('/productCart3',usersController.prodCart3);
router.get('/productCart4',usersController.prodCart4);

module.exports = router;