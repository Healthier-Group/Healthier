//agregar tabla de base de datos
// Probar si hay que traer o no sequelize

const {OrderProduct}= require("../../models/OrderProduct");

const addOrderProducts = async (req, res, next) => {
const {quantity,orderId,productId}= req.body

const orderProducts = await OrderProducts.create({
    quantity: quantity,
})
.then(orderProducts=>orderProducts.addOrder(orderId))
/************** */
const orderProducts2= await orderProducts.addOrder(orderId)

/************* */
.then(orderProducts=>orderProducts.addProduct(productId))   
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
