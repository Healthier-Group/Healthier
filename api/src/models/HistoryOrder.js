const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('historyorder', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
	})
}

