const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Atividade = sequelize.define(
    'Atividade',
    {
      cd_demanda: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cd_atividade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      dt_cadastro: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hr_cadastro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cd_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dc_material_apoio: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'atividade',
      timestamps: false,
    }
  );

  // Se precisar associar o modelo com outros modelos, faça isso aqui
  // Atividade.associate = (models) => {
  //   Atividade.belongsTo(models.OutroModelo);
  // };

  return Atividade;
};
