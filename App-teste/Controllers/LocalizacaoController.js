// controllers/LocalizacaoController.js

const { Localizacao } = require('../models'); // Substitua pelo caminho correto do seu modelo de Localização

const LocalizacaoController = {
  // Método para listar todas as localizações
  async listAll(req, res) {
    try {
      const localizacoes = await Localizacao.findAll();
      res.status(200).send(localizacoes);
    } catch (error) {
        console.error('Erro detalhado:', error);
        res.status(500).send({ message: 'Erro ao buscar localizações', detalhes: error.message });
      }
      
  },

  // Adicione outros métodos conforme necessário
};

module.exports = LocalizacaoController;
