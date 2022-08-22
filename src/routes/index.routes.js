const { Router } = require('express');
const router = Router();
const { getIndex } = require('../controllers/indexController')

router.get('/', getIndex);

module.exports = router;