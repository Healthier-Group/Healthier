const { Review } = require("../../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reviews = await Review.findAll({
      where: { productId : id }, 
    });
    var puntuaciones = await 0;
    var cantidad = []
    await reviews.map( p => {
      puntuaciones += p.calification;
      cantidad.push(p.calification)
    });
    await console.log("puntuaciones:", puntuaciones )
    await console.log("cantidad:", cantidad )
    var promedio = await Math.ceil(puntuaciones / cantidad.length);
    await console.log("promedio:", promedio )

    res.status(200).json({reviews, promedio});
  } catch (err) {
    next(err);
  }
};
