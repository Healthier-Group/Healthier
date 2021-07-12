const {DataTypes} = require('sequelize')

module.exports = sequelize => {
	sequelize.define('paymentDetail', {

        amount:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        provider:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false
        }
	})
}
