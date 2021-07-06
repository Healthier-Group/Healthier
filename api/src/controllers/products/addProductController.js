const { Products } = require("../../db");

module.exports = async (req, res, next) => {
  let product = req.body;
  try {
    product = await Products.create({ ...product });
    return res.json(product).status(200);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
