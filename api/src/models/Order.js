const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('order', {
        
        total:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
	})
}


