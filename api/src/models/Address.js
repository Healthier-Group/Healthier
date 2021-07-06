const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('address', {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.STRING,
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
};
