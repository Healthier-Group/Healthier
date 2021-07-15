const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    ingredients: { 
      type: DataTypes.TEXT,
    },
    size: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    sku: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El SKU no puede estar vacio",
        },
      },
      unique: {
        args: true,
        msg: "Ese SKU ya está registrado",
      },
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue:
        "https://i.pinimg.com/originals/24/58/5f/24585fc9b7433a224a6ff5506e346969.png",
    },
  });
};
