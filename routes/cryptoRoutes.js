const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', cryptoController.getAllCryptos);
router.get('/gainers', cryptoController.getTopGainers);
router.get('/new', cryptoController.getNewListings);
router.post('/', authMiddleware, cryptoController.createCrypto);

module.exports = router;
