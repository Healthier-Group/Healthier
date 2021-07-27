const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calification: {
      type: DataTypes.FLOAT, //Check type (Float/Range or ENUM)
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, 
      allowNull: false,
    },
  });
};
