const { Review } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reviewId = await Review.findAll({
      where: { id : id }, 
    });
    res.status(200).json(reviewId);
  } catch (err) {
    next(err);
  }
};
