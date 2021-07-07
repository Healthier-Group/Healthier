const {Router} = require('express');

const users = require('./users');

const router = Router();

router.get('/unauthorized', (req, res) => {
	res.json('No authorization');
});

router.use('/users', users);

module.exports = router;