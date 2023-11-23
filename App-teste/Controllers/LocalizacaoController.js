// controllers/LocalizacaoController.js

const { Localizacao } = require('../models'); // Substitua pelo caminho correto do seu modelo de Localização

const LocalizacaoController = {
  // Método para listar todas as localizações
  async listAll(req, res) {
    try {
      const localizacoes = await Localizacao.findAll();
      res.status(200).send(localizacoes);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao buscar localizações' });
    }
  },

  // Adicione outros métodos conforme necessário
};

module.exports = LocalizacaoController;
