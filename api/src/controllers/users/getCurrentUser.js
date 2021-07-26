const {User, History, Order} = require('../../db');


module.exports = async (req, res, next) => {
	const {id} = req.params;
	try {
		const user = await User.findOne({
			where: {id},
			include: History, Order
		});
		res.json(user);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
