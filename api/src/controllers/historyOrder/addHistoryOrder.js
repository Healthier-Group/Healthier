const {Historyorder, User} = require('../../db')


module.exports = async(req, res, next) => {
	let history = req.body; 
	let user = req.params.id;
	try{
		const newHistoryOrder = await Historyorder.create(history);
		const foundUser = await User.findByPk(user);
		await foundUser.addHistoryorder(newHistoryOrder);
		return res.json(newHistoryOrder).status(201) // (201) Created
	}
	catch(err){
		console.log("ERROR ----", err);
		next(res.status(412).json({message: 'Order History Not Created!'})) // (412) La condición previa falló
	}
}
