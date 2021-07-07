const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("products", {
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
      type: DataTypes.STRING,
    },
    SKU: {
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
      type: DataTypes.STRING,
    },
  });
};
