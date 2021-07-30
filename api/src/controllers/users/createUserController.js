const {User,Order} = require('../../db');
const emailer = require('../../emailer')

const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
	let user = req.body;	// { }
	try {
		if(typeof(user.password) === 'undefined' || user.password.length < 3) { throw new Error('Error de Validacion: contraseña invalida')}
		const hashedPassword = await bcrypt.hash(user.password, 12);
		const createdUser = await User.create({...user, password: hashedPassword, email: user.email.toLowerCase()});
		await Order.create({userId:createdUser.id})
		// await emailer.sendMailRegister(createdUser)
		return res.json(createdUser);
	} catch (err) {
		return res.send(err.message).status(409);
	}
};