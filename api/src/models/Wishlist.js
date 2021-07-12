const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('wishlist', {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
        wishlist: {
            type: DataTypes.STRING,
        }
    })
};
