const {Order, Orderproduct} = require("../../db")

module.exports = async(req, res, next) => {
  let {id} = req.params
  try{
    const orderId = await Order.findOne({
      where: {id},
      include: Orderproduct
    });
    return res.status(200).json(orderId);
  } 
  catch(err){
    next(res.status(404).json({message: 'Order Not Found!'}))
  }
}