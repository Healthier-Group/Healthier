const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('history', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
	})
}

