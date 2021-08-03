const { Product, Category, User } = require("../../db"); 

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productId = await Product.findAll({
      where: { id : id }, // Check if curly brackets are necessary
      include: [Category]
      //{
        //model: 
        
        // attributes: ["name", "id"],
        // through: {
        //     attributes: []
        // }
    //}
    });
    res.status(200).json(productId);
  } catch (err) {
    next(err)
  }


};
