const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('orderproduct', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
	})
}


