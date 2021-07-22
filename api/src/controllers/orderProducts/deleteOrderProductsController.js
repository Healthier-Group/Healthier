const {Orderproduct} = require('../../db')

module.exports = async(req, res, next) => {
  let {id} = req.params
  try{
    await Orderproduct.destroy({where: {id}})
    return res.status(202).json({message: 'Order Product Deleted!'}) // (202) OK
  } 
  catch(err){
    next(res.status(412).json({message: 'Order Product Not Deleted, Please Try Again!'})) // (412) La condición previa falló
  }
}