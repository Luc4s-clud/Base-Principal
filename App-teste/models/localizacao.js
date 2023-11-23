module.exports = (sequelize, DataTypes) => {
    const Localizacao = sequelize.define('Localizacao', {
      cd_localizacao: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      ds_localizacao: DataTypes.STRING,
    }, {
      tableName: 'localizacao',
      timestamps: false // Desativar timestamps se não estiver usando campos createdAt e updatedAt
    });
  
    return Localizacao;
  };
  