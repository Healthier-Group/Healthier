const {Orderproduct, Product} = require('../../db')


module.exports = async(req, res, next) => {
	let { productId, orderId} = req.body
	let quantity = 1
	try{
		const newOrderProduct = await Orderproduct.create({
			quantity,
			orderId
		});
		const producto = await Product.findByPk(productId);
		await newOrderProduct.setProduct(producto);
		return res.json(newOrderProduct).status(201) // (201) Created
	}
	catch(err){
		console.log("ERROR ----", err);
		next(res.status(412).json({message: 'Order Product Not Created!'})) // (412) La condición previa falló
	}
}
