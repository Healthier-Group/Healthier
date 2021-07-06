const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('payment_detail', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true  // Es necesaria?
        },
        orderId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount:{
            type: DataTypes.FLOAT, // ???
            allowNull: false
        },
        provider:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        },
        // De vuelta, esto se crea automaticamente???
        createdAt:{
            type: DataTypes.TIME,
            allowNull: false
        },
        updatedAt:{
            type: DataTypes.TIME,
            allowNull: false
        }
	});
};
