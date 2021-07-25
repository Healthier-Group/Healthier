const { Category } = require("../../db");

module.exports = async (req, res, next) => {
  try {
    const category = await Category.findAll();
    return res.json(category);
  } catch (error) {
    next(error);
    return res.json(error);
  }
};
