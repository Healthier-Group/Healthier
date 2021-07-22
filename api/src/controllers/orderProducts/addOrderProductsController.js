const {Orderproduct, Product} = require('../../db')


module.exports = async(req, res, next) => {
	let { quantity, productId, orderId } = req.body
	try{
		const newOrder = await Orderproduct.create({
			quantity,
			orderId
		});
		const producto = await Product.findByPk(productId);
		await console.log('hola soy producto: ', producto);
		await newOrder.setProduct(producto);
		await console.log("llegué");
		return res.json(newOrder).status(201) // (201) Created
	}
	catch(err){
		console.log("ERROR ----", err);
		next(res.status(412).json({message: 'Order Product Not Created!'})) // (412) La condición previa falló
	}
}
