require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");


let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: "d7630c2pugnc7a",
        dialect: "postgres",
        host: "ec2-23-23-164-251.compute-1.amazonaws.com",
        port: 5432,
        username: "cstawyloemnuth",
        password: "618a3ee2b3ab6394a35c15ea4039ce9fa80f80f23c0efe84e51fa1788fc47c43",
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
    :
 new Sequelize(
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

const { User, Historyorder, Product, Review, Category, Inventory, Orderproduct, Order, OrderMp } = sequelize.models;

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
User.hasOne(Order);
Order.belongsTo(User);
//modelo de relacion de ordenes de productos con productos
Orderproduct.hasOne(Product, { through: "aa"} );
Product.belongsToMany(Orderproduct, { through: "aa"} );
//modelo de relacion ordenes de compra con ordenes de producto
Order.hasMany(Orderproduct);
Orderproduct.belongsTo(Order);

User.hasMany(Historyorder);
Historyorder.belongsTo(User);

User.belongsToMany(Product, { through: "c"} );
Product.belongsToMany(User,  { through: "c"} );

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
