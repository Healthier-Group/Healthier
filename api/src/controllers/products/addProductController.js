const { Product, Category } = require("../../db");

module.exports = async (req, res, next) => {
  let {name,
       sku,
       description,
       ingredients,
       stock,
       price,
       image,
       category       
  } = req.body;
  try{
    const createdProduct = await Product.create({
      name,
      sku,
      description,
      ingredients,
      stock,
      price,
      image 
    });
    if (category){
      await category.forEach(catId => createdProduct.addCategory(Category.findByPk(catId)))
    }
  }catch(err){
    next(err);
  }
};
