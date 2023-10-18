const bcrypt = require('bcrypt');
const db = require('../models');
const User = db.User;

exports.signIn = async (req, res) => {
  try {
    console.log("Tentando encontrar usuário com o e-mail:", req.body.email);
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log("Usuário recuperado:", user);
    if (!req.body.senha || (user && !user.senha)) {
      

      console.log("req.body.senha:", req.body.senha);
      console.log("user.senha (se aplicável):", user && user.senha);
      console.log("Senha fornecida:", req.body.senha);
      console.log("Hash da senha armazenada:", user.senha);
      const validPassword = await bcrypt.compare(req.body.senha, user.senha);
      console.log("Resultado da comparação de senha:", validPassword);

      
        return res.status(400).send({ message: "Dados de senha ausentes." });
    }
    console.log("Verificando senha...");

    const validPassword = await bcrypt.compare(req.body.senha, user.senha);

    if (!validPassword) {
      return res.status(400).send({ message: "E-mail ou senha incorretos." });
    }

    res.send({ message: "Login bem-sucedido!" });
  } catch (error) {
    console.error("Erro durante a tentativa de login:", error);
    res.status(500).send({ 
      message: "Erro interno do servidor." });
    res.status(500).send({
      message: error.message || "Erro ao tentar fazer login."
    });
  }
  
  
};

exports.createUser = async (req, res) => {
  try {
    if (!req.body.senha) {
        return res.status(400).send({ message: "Dados de senha ausentes." });
    }

    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const user = await User.create({
      email: req.body.email,
      senha: hashedPassword
    });

    res.send({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao criar usuário."
    });
  }
};

// ... outros métodos ...
