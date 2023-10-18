const bcrypt = require('bcrypt');
const db = require('../models');  // Correção feita aqui
const User = db.User;

exports.signIn = async (req, res) => {
  try {
    console.log("Tentando encontrar usuário com o e-mail:", req.body.email);
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).send({ message: "E-mail ou senha incorretos." });
    }

    console.log("Comparando senha fornecida com senha armazenada.");
    const validPassword = await bcrypt.compare(req.body.senha, user.senha);

    if (!validPassword) {
      return res.status(400).send({ message: "E-mail ou senha incorretos." });
    }

    res.send({ message: "Login bem-sucedido!" });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao tentar fazer login."
    });
  }
};

// ... outros métodos ...

exports.createUser = async (req, res) => {
  try {
    console.log("Hasheando senha fornecida.");
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);  // 10 é o número de rounds para o salting

    console.log("Tentando criar novo usuário.");
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
