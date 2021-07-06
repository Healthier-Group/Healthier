const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('order_products', {
        
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
	})
}


