const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('orderProduct', {
        
        quantity:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
	})
}


