const cors = require('cors');  // Importe o pacote cors
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

app.use(express.json());  // Adicione esta linha
const routes = require('./routes/routes');

app.use(cors());  // Use o middleware cors
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
