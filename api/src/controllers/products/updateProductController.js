const { Product, Category } = require("../../db.js");

module.exports = async (req, res, next) => {
  let product = req.body;
  let categories = req.body.categories
  let { id } = req.params;
  try {
<<<<<<< HEAD
    const updatedProduct = await Product.findByPk(id)
    await updatedProduct.update(product)
    if (Array.isArray(categories)){
    await updatedProduct.setCategories(categories)
    } else {
      const catArray = [].concat(categories)
      await updatedProduct.setCategory(catArray)
    }
=======
    await Product.update(
      { ...product },
      {
        where: { id }, // Check curly brackets
      }
    );
    const updatedProduct = await Product.findOne({ where: { id } });
>>>>>>> main-test
    return res.json(updatedProduct).status(200);
  } catch (err) {
    next(err);
    return console.log(err);
  }
};
