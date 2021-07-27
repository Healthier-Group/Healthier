const {Historyorder} = require("../../db.js")

module.exports = async(req, res, next) => {
  let Historyorder = req.body
  let {userId} = req.params
  try{
    await Historyorder.update(historyorder, {where: {userId}} )
          res.status(202).send(historyorder) // (202) OK
  } 
  catch(err){
    next(res.status(412).json({message: 'History Order Product Not Updated!'})) // (412) La condición previa falló
  }
}
