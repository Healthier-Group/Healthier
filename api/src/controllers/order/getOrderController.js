const {Order, Orderproduct} = require("../../db")
const {Op} = require('sequelize')

module.exports = async(req, res, next) => {
  try{
    const order = await Order.findAll({
      include: Orderproduct
    })
    return res.status(200).json(order) // (200) OK
  }
  catch(error){
    next(res.status(404).json({message: 'Order Not Found!'})) // (404) Not Found
  }
}