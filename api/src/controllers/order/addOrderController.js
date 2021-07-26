const {Order} = require('../../db')

module.exports = async(req, res, next) => {
	let order = req.body
	try{
		order = await Order.create({...order})
		return res.json(order).status(201) // (201) Created
	}
	catch(err){
		next(res.status(412).jason({message: 'Order Not Created!'})) // (412) La condición previa falló
	}
}
