module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define('Usuarios', {
      cd_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nm_usuario: {
        type: DataTypes.STRING,
      },
      nr_cpf: {
        type: DataTypes.STRING,
      },
      ds_email: {
        type: DataTypes.STRING,
      },
      nr_ddd: {
        type: DataTypes.STRING,
      },
      nr_telefone: {
        type: DataTypes.STRING,
      },
      cd_tp_usuario: {
        type: DataTypes.INTEGER,
      },
      sn_ativo: {
        type: DataTypes.STRING,
      },
      dt_cadastro: {
        type: DataTypes.DATE,
      },
      hr_cadastro: {
        type: DataTypes.TIME,
      },
    }, {
      tableName: 'usuarios',
      timestamps: false,
    });
  
    return Usuarios;
  };
  