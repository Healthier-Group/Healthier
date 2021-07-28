const {Historyorder} = require("../../db.js")

module.exports = async(req, res, next) => {
  let order = req.body
  let {id} = req.params
  try{
    await Historyorder.update(order, {where: {id}} )
          res.status(202).send(order) // (202) OK
  } 
  catch(err){
    next(res.status(412).json({message: 'History Order Product Not Updated!'})) // (412) La condición previa falló
  }
}
