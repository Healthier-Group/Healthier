const {DataTypes} = require('sequelize')

module.exports = sequelize => {

	sequelize.define('order', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true // Es necesaria?
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymenId:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total:{
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        // Esto se crea automaticamente?? el tipo de dato TIME está bien? que es TIMESTAMP?
        createdAt:{
            type: DataTypes.TIME,
            allowNull: false
        },
        updatedAt:{
            type: DataTypes.TIME,
            allowNull: false
        }
	})
}


