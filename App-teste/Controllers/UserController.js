const bcrypt = require('bcrypt');
const db = require('../models');
const User = db.User;
const Usuarios = db.Usuarios;


exports.signIn = async (req, res) => {
  try {
    console.log("Tentando encontrar usuário com o e-mail:", req.body.ds_email);
    const user = await User.findOne({ where: { ds_email: req.body.ds_email } });
    console.log("Usuário recuperado:", user);
    if (!user || !req.body.senha) {
      console.log("req.body.senha:", req.body.senha);
      console.log("user.senha (se aplicável):", user && user.senha);
      console.log("Senha fornecida:", req.body.senha);
      console.log("Hash da senha armazenada:", user && user.senha);
      return res.status(400).send({ message: "E-mail ou senha incorretos." });
    }

    console.log("Verificando senha...");
    const validPassword = await bcrypt.compare(req.body.senha, user.senha);

    if (!validPassword) {
      return res.status(400).send({ message: "E-mail ou senha incorretos." });
    }

    console.log("Login bem-sucedido!");
    res.send({ message: "Login bem-sucedido!", userId: user.cd_usuario });

    console.log({ message: "Login bem-sucedido!", userId: user.cd_usuario });

  } catch (error) {
    console.error("Erro durante a tentativa de login:", error);
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

    // 1. Criar o usuário na tabela 'usuarios'
    const usuario = await Usuarios.create({
      nm_usuario: req.body.nm_usuario,
      nr_cpf: req.body.nr_cpf,
      ds_email: req.body.ds_email,
      nr_ddd: req.body.nr_ddd,
      nr_telefone: req.body.nr_telefone,
      cd_tp_usuario: 2,  // Código de usuário padrão
      sn_ativo: 'S',  // Ativo por padrão
      dt_cadastro: new Date(),
      hr_cadastro: new Date()
    });

    // 2. Obter o 'cd_usuario' gerado para o novo usuário
    const cd_usuario = usuario.cd_usuario;

    // 3. Criar o usuário na tabela 'user' usando o 'cd_usuario' obtido
    const hashedPassword = await bcrypt.hash(req.body.senha, 10);
    const userCreated = await User.create({
      ds_email: req.body.ds_email,
      senha: hashedPassword,
      cd_usuario: cd_usuario,
      cd_tp_usuario: 2  // Código de usuário padrão
    });

    res.send({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao criar usuário."
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.id; // Mudança aqui para usar o userId (ou 'id') dos parâmetros da rota
    const user = await Usuarios.findOne({ where: { cd_usuario: userId } }); // Busca pelo 'cd_usuario'
    
    if (!user) {
      return res.status(404).send({ message: 'Usuário não encontrado.' });
    }
    
    res.send(user); // Enviar dados do usuário
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Erro ao buscar usuário.'
    });
  }
};