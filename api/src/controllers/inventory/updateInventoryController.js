const { Inventory } = require("../../db.js");

module.exports = async (req, res, next) => {
  let inventory = req.body;
  let { id } = req.params;
  try {
    await Inventory.update(
      { ...inventory },
      {
        where: { id }, // Check curly brackets
      }
    );
    const updatedInventory = await Inventory.findOne({ where: { id } });
    console.log(updatedInventory);
    return res.json(updatedInventory).status(200);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
