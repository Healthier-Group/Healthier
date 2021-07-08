const { Product } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id }, // Check if curly brackets are necessary
    });
    res.json(product);
  } catch (err) {
    next(err);
    return console.log(err);
  }
};
