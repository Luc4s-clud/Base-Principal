const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const { default: Home } = require('../app-teste/src/components/pages/Home');



// Exemplo de rota
router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
router.post('/login', UserController.signIn);
router.post('/register', UserController.createUser);
router.get('/user/:id', UserController.getUser);


// Aqui, você adicionará mais rotas conforme necessário

module.exports = router;
