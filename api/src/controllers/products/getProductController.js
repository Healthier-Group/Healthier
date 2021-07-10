const { Product } = require("../../db");

module.exports = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    next(error);
    return res.json(error);
  }
};
