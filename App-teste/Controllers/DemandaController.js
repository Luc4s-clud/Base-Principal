const db = require('../models');
const SequelizeDemanda = db.Demanda;

exports.getAllDemandas = async (req, res) => {
  try {
    const demandas = await SequelizeDemanda.findAll();
    res.json(demandas);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao buscar as demandas."
    });
  }
};

exports.createDemanda = async (req, res) => {
  try {
      console.log('Dados recebidos:', req.body);
      const novaDemanda = await SequelizeDemanda.create(req.body);
      console.log('Demanda criada:', novaDemanda);
      res.status(201).send(novaDemanda);
  } catch (error) {
      console.error('Erro ao criar demanda:', error);
      res.status(500).send({ error: 'Erro ao criar demanda' });
  }
};
