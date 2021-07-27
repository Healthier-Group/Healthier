const { Review } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Review.destroy({
      where: 
        { id: id }, // Check if curly brackets are necessary
    });
    return res.json({ success: "Review successfully deleted" }).status(200);
  } catch (err) {
    next(err);
    return res.json(err);
  }
};
