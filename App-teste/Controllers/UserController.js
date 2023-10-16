const bcrypt = require('bcrypt');


exports.signIn = async (req, res) => {
  try {
    const user = await User.findOne({ where: { ds_email: req.body.email } });

    if (!user) {
      return res.status(400).send({ message: "E-mail ou senha incorretos." });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

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
    const hashedPassword = await bcrypt.hash(req.body.password, 10);  // 10 é o número de rounds para o salting

    const user = await User.create({
      ds_email: req.body.email,
      password: hashedPassword
    });

    res.send({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao criar usuário."
    });
  }
};
