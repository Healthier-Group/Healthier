const { Product } = require("../../db");

module.exports = async (req, res, next) => {
  // let {product, category} = req.body;
  // try {
  //   product = await Product.create({ ...product })
  //   .then(p => p.addCategory(category))
  //   return res.json(product).status(200);
  // } catch (err) {
  //   next(err);
  //   return console.log(err);
  // }
  let {name,
          sku,
          description ,
          ingredients ,
          stock ,
          price ,
          image ,
          category
          
  } = req.body;
  try {
    await Product.create({
          name,
          sku,
          description ,
          ingredients ,
          stock ,
          price ,
          image,      
    })
    .then(p => p.addCategory(category))
    
  } catch (err) {
    next(err);
    
  }
};

/* router.post('/dog', async (req, res, next) => {
  let { name, height, age, weight, temperament } = req.body
  try {
      await Dog.create({
          id: uuidv4(),
          name,
          height,
          age,
          weight,
      })
          .then(breed => breed.addTemperament(temperament))
  } catch (error) {
      next(error)
  }
}) */