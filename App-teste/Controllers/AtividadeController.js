// atividadeController.js
const { Atividade } = require('../models');
const moment = require('moment'); // Utilizando a biblioteca 'moment' para manipulação de datas

module.exports = {
  criarAtividade: async (req, res) => {
    try {
      const { cd_demanda, dc_material_apoio } = req.body;
      const cd_usuario = req.user.id; // Supondo que o id do usuário esteja disponível na requisição (por exemplo, após a autenticação)

      // Crie a atividade no banco de dados
      const novaAtividade = await Atividade.create({
        cd_demanda,
        dc_material_apoio,
        cd_usuario,
        dt_cadastro: moment().format('YYYY-MM-DD'), // Pega a data/hora atual formatada
        hr_cadastro: moment().format('HH:mm:ss'), 
      });

      // Envie uma resposta de sucesso
      res.status(201).json({ mensagem: 'Atividade criada com sucesso', atividade: novaAtividade });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao criar atividade' });
    }
  },

  // Adicione mais funções do controlador conforme necessário para outras operações relacionadas a atividades
};
