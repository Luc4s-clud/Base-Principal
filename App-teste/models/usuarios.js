module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nm_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nr_cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ds_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nr_ddd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nr_telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cd_tp_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sn_ativo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dt_cadastro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hr_cadastro: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  }, {
    tableName: 'usuarios',
    timestamps: false,
  });

  return Usuarios;
};
