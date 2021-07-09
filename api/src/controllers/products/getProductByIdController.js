const { Product } = require("../../db");
//const { Sequelize } = require('sequelize')


module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    
    const productId = await Product.findAll({
      where: { id : id }, // Check if curly brackets are necessary
    });
    
    res.status(200).json(productId);
  } catch (err) {
    next(err)
  }


};
