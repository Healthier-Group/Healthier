const { Products } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Products.findOne({
      where: { id }, // Check if curly brackets are necessary
    });
    res.json(product);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
