const bcrypt = require('bcrypt');
const db = require('../models');
const User = db.User;
const Usuarios = db.Usuarios;

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
    const { nm_usuario, nr_cpf, nr_ddd, nr_telefone, ds_email, senha } = req.body;

    // 1. Criar o usuário na tabela 'usuarios'
    const usuario = await Usuarios.create({
      nm_usuario,
      nr_cpf,
      nr_ddd,
      nr_telefone,
      ds_email,
      cd_tp_usuario: 2,
      sn_ativo: 'S',
      dt_cadastro: new Date(),
      hr_cadastro: new Date(),
    });

    // 2. Criar o usuário na tabela 'user'
    const hashedPassword = await bcrypt.hash(senha, 10);
    await User.create({
      email: ds_email,
      senha: hashedPassword,
      cd_usuario: usuario.cd_usuario,
      cd_tp_usuario: 2,
    });

    res.status(200).send({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Erro ao criar usuário.' });
  }
};