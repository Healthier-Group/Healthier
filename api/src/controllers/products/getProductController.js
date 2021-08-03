const { Product , Category, User } = require("../../db");
const {Op} = require('sequelize')

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) {
      await Product.findAll({
        include: [Category]
      })
      .then(product => res.send(product))
    } else {
      await Product.findAll({
        where:{
          name:{[Op.iLike]: `%${q}%`}
        }, 
        include: {
            model: Category
        } 
      })
      .then(product => res.send(product))
    }
    
  } catch (error) {
    next(error)
  }
};
