module.exports = (sequelize, DataTypes) => {
  const Demanda = sequelize.define('Demanda', {
    cd_demanda: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nm_demanda: DataTypes.STRING,
    ds_descricao: DataTypes.STRING,
    qt_horas: DataTypes.INTEGER,
    qt_vagas: DataTypes.INTEGER,
    dt_inicio: DataTypes.DATE,
    dt_fim: DataTypes.DATE,
    sn_finalizada: DataTypes.STRING,
    dt_cadastro: DataTypes.DATE,
    hr_cadastro: DataTypes.TIME,
    dt_fim_inscricao: DataTypes.DATE,
    cd_usuario: DataTypes.INTEGER,
    cd_imagem: DataTypes.BLOB('long'),
    cd_localizacao: DataTypes.INTEGER
  }, {
    tableName: 'demanda',
    timestamps: false // Desativar timestamps se não estiver usando campos createdAt e updatedAt
  });

  return Demanda;
};
