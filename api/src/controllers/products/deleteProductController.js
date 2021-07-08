const { Product } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id: { id }, // Check if curly brackets are necessary
      },
    });
    return res.json({ success: "Product successfully deleted" }).status(200);
  } catch (err) {
    next(err);
    return res.json(err);
  }
};
