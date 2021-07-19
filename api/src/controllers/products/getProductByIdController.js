const { Product, Category } = require("../../db"); 

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productId = await Product.findAll({
      where: { id : id }, // Check if curly brackets are necessary
      include: {
        model: Category,
        attributes: ["name"],
        through: {
            attributes: []
        }
    }
    });
    res.status(200).json(productId);
  } catch (err) {
    next(err)
  }


};
