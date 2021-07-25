const { Inventory } = require("../../db");

module.exports = async (req, res, next) => {
  let inventory = req.body;
  try {
    inventory = await Inventory.create({ ...inventory });
    return res.json(inventory).status(200);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
