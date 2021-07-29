require("dotenv").config();
const {PORT} = process.env
const {server} = require('./src/app.js');
const {conn} = require('./src/db.js');
const {userMockUp, adminMockUp} = require('./src/utils/mockUps/users')
const {productsMockUp} = require('./src/utils/mockUps/products');
const { categoryMockUp } = require("./src/utils/mockUps/categories.js");
const { catProducts } = require("./src/utils/mockUps/catProducts");

conn.sync({ force: true })
.then(async() => {
    await server.listen(PORT, async() => {
    console.log(`Healthier API is now listening at port ${PORT}`);
    await adminMockUp();
    await categoryMockUp();
    await userMockUp();
    await productsMockUp();
    await catProducts();
  });
}) 

