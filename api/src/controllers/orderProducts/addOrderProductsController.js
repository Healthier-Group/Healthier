const {Orderproduct, Product} = require('../../db')


module.exports = async(req, res, next) => {
	// let { productId, orderId} = req.body
	let idProducto = req.body.productId
	let order = req.body.orderId
	let cantidad = 1
	try{
		const [createdOP] = await Orderproduct.findOrCreate({
			where: {
				quantity: cantidad,
				orderId: order
			}
		})
		await console.log("primer paso, crea orderP: ", createdOP)
		const producto = await Product.findByPk(idProducto);
		await console.log("segundo paso, busca product: ", producto)
		await createdOP.setProduct(producto)
		await console.log("tercer paso, setea producto")
		return res.json(createdOP).status(201) // (201) Created
	}
	catch(err){
		console.log("ERROR ----", err);
		next(res.status(412).send(err)) // (412) La condición previa falló
	}
}
