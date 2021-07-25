const {Orderproduct} = require("../../db")

module.exports = async(req, res, next) => {
  let {id} = req.params
  try{
    const order = await Orderproduct.findOne({where: {id}});
    return res.status(200).json(order);
  } 
  catch(err){
    next(res.status(404).json({message: 'Order Product Not Found!'}))
  }
}