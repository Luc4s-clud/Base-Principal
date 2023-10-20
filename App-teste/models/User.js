module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cd_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'usuarios',
        key: 'cd_usuario'
      }
    },
    cd_tp_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tipo_usuario',
        key: 'cd_tp_usuario'
      }
    }    
  }, {
    tableName: 'user'
  },
  {
    tableName: 'user',
    timestamps: false  // Isto desativa os campos createdAt e updatedAt
});

  return User;
};
