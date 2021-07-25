const { Review } = require("../../db");

module.exports = async (req, res, next) => {
  try {
    const review = await Review.findAll();
    return res.json(review);
  } catch (error) {
    next(error);
    return res.json(error);
  }
};
