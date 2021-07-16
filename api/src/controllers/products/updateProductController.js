const { Product } = require("../../db.js");

module.exports = async (req, res, next) => {
  let product = req.body;
  let { id } = req.params;
  try {
    await Product.update(
      { ...product },
      {
        where: { id }, // Check curly brackets
      }
    );
    const updatedProduct = await Product.findOne({ where: { id } });
    return res.json(updatedProduct).status(200);
  } catch (err) {
    next(err);
    return console.log(err);
  }
};
