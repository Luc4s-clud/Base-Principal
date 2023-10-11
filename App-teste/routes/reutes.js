const express = require('express');
const router = express.Router();

// Exemplo de rota
router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Aqui, você adicionará mais rotas conforme necessário

module.exports = router;
