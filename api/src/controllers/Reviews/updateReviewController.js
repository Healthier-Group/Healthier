const { Review } = require("../../db.js");

module.exports = async (req, res, next) => {
  let review = req.body;
  let { id } = req.params;
  try {
    await Review.update(
      { ...review },
      {
        where: { id },
      }
    );
    const updatedReview = await Review.findOne({ where: { id } });
    return res.json(updatedReview).status(200);
  } catch (err) {
    res.json(err);
    return console.log(err);
  }
};
