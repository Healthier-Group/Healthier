const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('payment', {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiry: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
};