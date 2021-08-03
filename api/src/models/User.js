const {DataTypes} = require('sequelize');

module.exports = sequelize => {
	sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		googleId: {
			type: DataTypes.STRING
		},
		isAdmin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		isReseller:{
			type: DataTypes.BOOLEAN,	
			defaultValue: false,
		},
		isDeleted: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		name: {
			type: DataTypes.STRING,
		},
		username:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					msg: 'El campo Usuario no debe estar vacio',
				},
				is: {
					args: /^[A-Za-z0-9]{3,20}$/,
					msg: 'El campo Usuario contiene errores'
				}
			},
			unique: {
				msg: 'Ese usuario ya existe',
			}
		},
		email: {
			type: DataTypes.STRING(60),
			unique: {
				msg: 'Email ya registrado',
			},
			allowNull: false,
			validate: {
				isEmail: {
					msg: 'Email Invalido',
				},
				notEmpty: {
					msg: 'El email no puede estar vacio',
				}
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
		},
		firstLogging: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		boughtProducts: {
			type: DataTypes.ARRAY(DataTypes.INTEGER)
		}
	});
};
