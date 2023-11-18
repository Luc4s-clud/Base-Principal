const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const DemandaController = require('../Controllers/DemandaController');



// Exemplo de rota
router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
router.post('/login', UserController.signIn);
router.post('/register', UserController.createUser);
router.get('/user/:id', UserController.getUser);
router.get('/demandas', DemandaController.getAllDemandas);


// Aqui, você adicionará mais rotas conforme necessário

module.exports = router;
