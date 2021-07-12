const {User} = require('../../db.js');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
	let user = req.body;
	let {id} = req.params;
	try {
		const hashedPassword = await bcrypt.hash(user.password, 12);
		await User.update({...user, password: hashedPassword},
		{where: 
			{id}
		});
		const updatedUser = await User.findOne({where:{id}})
		console.log(updatedUser)
		return res.json(updatedUser).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
