const { Category } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const categoryId = await Category.findAll({
      where: { id : id }, // Check if curly brackets are necessary
    });
    res.status(200).json(categoryId);
  } catch (err) {
    next(err);
  }
};
