const {Orderproduct} = require("../../db.js")

module.exports = async(req, res, next) => {
  let orderProduct = req.body
  let {id} = req.params
  try{
    await Orderproduct.update(orderProduct, {where: {id}} );
    res.status(202).json({message: 'Order Product Updated!'}) // (202) OK
  } 
  catch(err){
    next(res.status(412).json({message: 'Order Product Not Updated!'})) // (412) La condición previa falló
  }
}
