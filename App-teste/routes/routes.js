const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


// Exemplo de rota
router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
router.post('/login', UserController.signIn);
router.post('/register', UserController.createUser);

// Aqui, você adicionará mais rotas conforme necessário

module.exports = router;
