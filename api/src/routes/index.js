const {Router} = require('express');

const users = require('./users');
const admin = require('./admin');

const router = Router();

router.get('/unauthorized', (req, res) => {
	res.json('No authorization');
});

router.use('/users', users);
router.use('/admin', admin);

module.exports = router;