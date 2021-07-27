const {Historyorder} = require("../../db")


module.exports = async(req, res, next) => {
  try{
    const historyOrder = await Historyorder.findAll()
    return res.status(200).json(historyOrder) // (200) OK
  }
  catch(error){
    next(res.status(404).json({message: 'History Order Not Found!'})) // (404) Not Found
  }
}