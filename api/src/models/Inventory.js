const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("inventory", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
