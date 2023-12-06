const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Tipo_usuario = sequelize.define(
    'Tipo_usuario',
    {
      cd_tp_usuario: {
        type: DataTypes.INTEGER,
      },
      ds_tp_usuario: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'tipo_usuario',
      timestamps: false,
    }
  );

  // Se precisar associar o modelo com outros modelos, faça isso aqui
  // Atividade.associate = (models) => {
  //   Atividade.belongsTo(models.OutroModelo);
  // };

  return Tipo_usuario;
};
