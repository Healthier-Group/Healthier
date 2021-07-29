const {Historyorder} = require("../../db")

module.exports = async(req, res, next) => {
  let {userId} = req.params
  try{
    const historyOrder = await Historyorder.findAll({where: {userId}});
    return res.status(200).json(historyOrder);
  } 
  catch(err){
    next(res.status(404).json(err))
  }
}