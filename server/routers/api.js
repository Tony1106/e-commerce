const  express = require('express');
const router = express.Router();

//Authentication
router.post('/user', require('../api/Auth/Handler').create);
router.get('/user/:id', require('../api/Auth/Handler').show);
router.delete('/user/:id', require('../api/Auth/Handler').destroy);
router.put('/user/:id', require('../api/Auth/Handler').update);


//product
router.post('/product', require('../api/Product/Handler').create);
router.get('/product', require('../api/Product/Handler').getAll);
router.delete('/product/:id', require('../api/Product/Handler').destroy);
router.put('/product/:id', require('../api/Product/Handler').update);


//
module.exports = router;