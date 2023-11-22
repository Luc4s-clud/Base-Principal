const db = require('../models');
const Demanda = db.Demanda;
const { Demanda } = require('../models/demanda');

exports.getAllDemandas = async (req, res) => {
  try {
    const demandas = await Demanda.findAll();
    res.json(demandas);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao buscar as demandas."
    });
  }
};

// Certifique-se de que o caminho esteja correto

exports.createDemanda = async (req, res) => {
    try {
        const novaDemanda = await Demanda.create(req.body);
        res.status(201).send(novaDemanda);
    } catch (error) {
        res.status(500).send({ error: 'Erro ao criar demanda' });
    }
};
