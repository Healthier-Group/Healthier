const {Historyorder} = require("../../db")


module.exports = async(req, res, next) => {
  try{
    const historyOrder = await Historyorder.findAll()
    return res.status(200).json(historyOrder) // (200) OK
  }
  catch(error){
    next(res.status(404).send(error)) // (404) Not Found
  }
}