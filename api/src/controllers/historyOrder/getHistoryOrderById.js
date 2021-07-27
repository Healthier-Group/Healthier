const {Historyorder} = require("../../db")

module.exports = async(req, res, next) => {
  let {id} = req.params
  try{
    const historyOrder = await Historyorder.findOne({where: {id}});
    return res.status(200).json(historyOrder);
  } 
  catch(err){
    next(res.status(404).json({message: 'History Order Not Found!'}))
  }
}