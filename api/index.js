const {server} = require('./src/app.js');
const {conn} = require('./src/db.js');
const {userMockUp, adminMockUp} = require('./src/utils/mockUps/users')
const {productsMockUp} = require('./src/utils/mockUps/products')

conn.sync({ force: true })
.then(async() => {
    await server.listen(process.env.PORT, async() => {
    console.log(`Healthier API is now listening at port ${process.env.PORT}`);

    await adminMockUp();
    await userMockUp();
    await productsMockUp();
  });
})

