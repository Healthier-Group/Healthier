const {Orderproduct, Product} = require("../../db")

module.exports = async(req, res, next) => {
  let {id} = req.params
  try{
    const order = await Orderproduct.findAll({
        where: {
            orderId: id
        },
        include: Product
    });
    return res.status(200).json(order);
  } 
  catch(err){
    return next(res.status(404).json({message: 'Order Product Not Found!'}))
  }
}