const { Category } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await Category.findOne({
      where: { id }, // Check if curly brackets are necessary
    });
    res.json(category);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
