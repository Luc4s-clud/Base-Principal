const cors = require('cors');
const express = require('express');

const db = require('./models/index');  // Atualize o caminho conforme necessário
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

  const app = express();
  const PORT = 3050;
  
  app.use(express.json());
  app.use(cors());
  
  const routes = require('./routes/routes');
  app.use(routes);
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });