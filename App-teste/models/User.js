module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        ds_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cd_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, // especifica que essa é a chave primária
        },
        cd_tp_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
      tableName: 'User',
    });
  
    User.associate = function (models) {
        User.belongsTo(models.Usuarios, {
            foreignKey: 'cd_usuario',
            as: 'usuarios',
        });
    };
  
    return User;
  };
  