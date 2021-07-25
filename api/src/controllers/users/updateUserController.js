const {User} = require('../../db.js');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
	let user = req.body;
	let {id} = req.params;
	try {
		if(user.password) {	user.password = await bcrypt.hash(user.password, 12);}
		if(user.email) { user.email = user.email.toLowerCase();}
		else{
			const old = await User.findOne({
				where: {id}
			});
			user.password = old.password;
		}
		await User.update({...user},
		{where: 
			{id}
		});
		return res.json({success: true}).status(200);
	} catch (err) {
		return res.send(err.message).status(409);
	}
};
