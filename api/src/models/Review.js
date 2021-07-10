const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    calification: {
      type: DataTypes.FLOAT, //Check type (Float/Range or ENUM)
      allowNull: false,
    },
  });
};
