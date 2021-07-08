const { Product } = require("../../db");

module.exports = async (req, res, next) => {
  let product = req.body;
  try {
    product = await Product.create({ ...product });
    return res.json(product).status(200);
  } catch (err) {
    next(err);
    return console.log(err);
  }
};
