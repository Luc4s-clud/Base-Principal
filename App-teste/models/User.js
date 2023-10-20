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
      },
      cd_tp_usuario: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
  });

  User.associate = function (models) {
      User.belongsTo(models.Usuarios, {
          foreignKey: 'cd_usuario',
          as: 'usuarios',
      });
  };

  return User;
};
