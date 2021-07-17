require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Product, Review, Category, Inventory, Orderproduct, Order, OrderMp } = sequelize.models;

//Product.belongsToMany(Review, {through: 'ProductReview'})
//Review.hasOne(Product, {through: 'ProductReview'})
Product.belongsToMany(Category, { through: "products_category" });
Category.belongsToMany(Product, { through: "products_category" });
Inventory.hasMany(Product);
Product.belongsTo(Inventory);
Product.hasMany(Review);
Review.belongsTo(Product);
OrderMp.belongsTo(User)


//modelo de relacion usuarios a ordenes de compra
User.hasMany(Order);
Order.belongsTo(User);
//modelo de relacion de ordenes de productos con productos
Orderproduct.hasOne(Product);
Product.belongsTo(Orderproduct);
//modelo de relacion ordenes de compra con ordenes de producto
Order.hasMany(Orderproduct);
Orderproduct.belongsTo(Order);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
