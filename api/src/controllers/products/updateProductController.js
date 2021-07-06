const { Products } = require("../../db.js");

module.exports = async (req, res, next) => {
  let product = req.body;
  let { id } = req.params;
  try {
    await Products.update(
      { ...product },
      {
        where: { id }, // Check curly brackets
      }
    );
    const updatedProduct = await Products.findOne({ where: { id } });
    console.log(updatedProduct);
    return res.json(updatedProduct).status(200);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
