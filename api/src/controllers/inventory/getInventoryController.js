const { Inventory } = require("../../db");

module.exports = async (req, res, next) => {
  try {
    const inventory = await Inventory.findAll();
    return res.json(inventory);
  } catch (error) {
    next(error);
    return res.json(error);
  }
};
