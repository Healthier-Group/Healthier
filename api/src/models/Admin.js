const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('admin', {
		name: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING(60),
			allowNull: false,
			validate: {
				isEmail: {
					msg: 'Email inválido',
				},
				notEmpty: {
					msg: 'El email no puede estar vacío',
				},
			},
			unique: {
				args: true,
				msg: 'Ese usuario ya existe',
			},
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: false,
			validate: {
				notEmpty: {
					msg: 'La contraseña no puede estar vacía',
				},
			},
		},
		contact: {
			type: DataTypes.STRING,
		},
		firstLogging: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		}
	});
};
