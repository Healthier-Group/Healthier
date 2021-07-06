const {Router} = require('express');

const users = require('./users');
const admin = require('./admin');
const order_products = require('./orderProducts');
const order = require('./order');

const router = Router();

router.get('/unauthorized', (req, res) => {
	res.json('No authorization');
});

router.use('/users', users);
router.use('/admin', admin);
router.use('/order_products', order_products)
router.use('/order', order)

module.exports = router;