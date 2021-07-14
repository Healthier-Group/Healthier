const { Category } = require("../../db.js");

module.exports = async (req, res, next) => {
  let category = req.body;
  let { id } = req.params;
  try {
    await Category.update(
      { ...category },
      {
        where: { id }, // Check curly brackets
      }
    );
    const updatedCategory = await Category.findOne({ where: { id } });
    console.log(updatedCategory);
    return res.json(updatedCategory).status(200);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
