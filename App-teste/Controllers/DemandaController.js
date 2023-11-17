const db = require('../models');
const Demanda = db.Demanda;

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
