const {User} = require('../../db');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
	let user = req.body;	// { }
	try {
		const hashedPassword = await bcrypt.hash(user.password, 12);
		user = await User.create({...user, password: hashedPassword});
		return res.json(user).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
