//agregar tabla de base de datos
// Probar si hay que traer o no sequelize

const {OrderProduct}= require('../../db');

const addOrderProducts = async (req, res, next) => {
const {quantity,orderId,productId}= req.body

const orderProducts = await OrderProduct.create({
    quantity: quantity,
})
.then(orderProducts=>OrderProduct.addOrder(orderId))
/************** */
const orderProducts2= await OrderProduct.addOrder(orderId)

/************* */
.then(orderProducts=>OrderProduct.addProduct(productId))   
.then(r => res.send({ message: 'New orderProducts created successfully' }))
.catch(error=>next(error))
};
module.exports = addOrderProducts



/* const addOrderProducts = async (req, res, next) => {
	try{
		const {quantity,orderId,productId}= req.body
		const newOrder = {
			quantity,
			orderId,
			productId
		}
		const orderCreated = await OrderProduct.create(newOrder);
		
	}
	catch(error){
		next(error)
	} 		
}*/
