const {Order} = require("../../db.js")

module.exports = async(req, res, next) => {
  let order = req.body
  let {id} = req.params
  try{
    await Order.update(order,{where: {id}})
    res.status(202).json({message: 'Order Updated!'}) // (202) OK
  } 
  catch(err){
    next(res.status(412).json({message: 'Order Not Updated!'})) // (412) La condición previa falló
  }
}
