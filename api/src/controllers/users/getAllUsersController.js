const {User, Historyorder, Order} = require('../../db');

module.exports = async (req, res, next) => {
    try {
		const users = await User.findAll({
			include: [Order, Historyorder]
		});
		return res.json(users);
	} catch (error) {
		next(error);
		return res.json(error);
	}
}