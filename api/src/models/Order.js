const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        isPaid: { 
            type: DataTypes.BOOLEAN,  
            allowNull: true 
        }
	})
}


