const {Orderproduct, Product} = require("../../db")
const {Op} = require('sequelize')


module.exports = async(req, res, next) => {
  const producto = req.body.product
  try{
    const orders = await Orderproduct.findAll({
      include: Product
    })
    return res.status(200).json(orders) // (200) OK
  }
  catch(error){
    next(res.status(404).json({message: 'Order Product Not Found!'})) // (404) Not Found
  }
}
