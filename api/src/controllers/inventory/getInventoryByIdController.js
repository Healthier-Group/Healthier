const { Inventory } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const inventory = await Inventory.findOne({
      where: { id }, // Check if curly brackets are necessary
    });
    res.json(inventory);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
