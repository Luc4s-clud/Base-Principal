const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
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
      primaryKey: true, // Se 'cd_atividade' é uma chave primária
      autoIncrement: true, // Se 'cd_atividade' é uma chave primária autoincrementável
    },
    dt_cadastro: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hr_cadastro: {
      type: DataTypes.STRING, // Ou pode ser do tipo DataTypes.TIME
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
    tableName: 'atividade', // Nome da tabela no banco de dados (certifique-se de que coincide com o nome real da tabela)
    timestamps: false, // Se você não tem colunas de timestamps (created_at, updated_at), defina como false
  }
);

module.exports = Atividade;
}
