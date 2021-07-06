const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('order_products', {
        orderId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true // Es necesaria?
        },
        productId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
	});
};


