const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('admin', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(60),
			allowNull: false,
			validate: {
				isEmail: {
					msg: 'Email Inválido',
				},
				notEmpty: {
					msg: 'El email no puede estar vacio',
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
					msg: 'La contraseña no puede estar vacia',
				},
			},
		},
		contact: {
			type: DataTypes.STRING,
		}
	});
};
