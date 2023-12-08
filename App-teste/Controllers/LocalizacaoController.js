// controllers/LocalizacaoController.js

const { Localizacao } = require('../models');

const LocalizacaoController = {
  async listAll(req, res) {
    try {
      const localizacoes = await Localizacao.findAll();
      res.status(200).send(localizacoes);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao buscar localizações' });
    }
  },

};

module.exports = LocalizacaoController;
