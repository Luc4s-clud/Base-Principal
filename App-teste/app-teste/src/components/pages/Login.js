import React, { useState } from 'react';
import axios from 'axios';
import '../pages/Login.css';
import logoImage from '../images/logo500.png';
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [showRegister, setShowRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerCPF, setRegisterCPF] = useState('');
  const [registerDDD, setRegisterDDD] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    



    try {
      const response = await axios.post('http://localhost:3050/login', {
        ds_email: email,
        senha: password
      });
      if (response.data && response.data.message) {
        if (response.data.message === 'Login bem-sucedido!') {
          alert('Login bem-sucedido!');
          navigate("/home");
        } else {
          setError(response.data.message);
        }
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Erro ao tentar fazer login. Por favor, tente novamente.');
    }
  };
 // console.log('ds_email:', req.body.ds_email);  // Adicione esta linha para verificar o valor de ds_email

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3050/register', {
        ds_email: registerEmail,
        senha: registerPassword,
        nm_usuario: registerName,
        nr_cpf: registerCPF,
        nr_ddd: registerDDD,
        nr_telefone: registerPhone,
        // Não é necessário enviar cd_tp_usuario e sn_ativo, pois eles serão definidos no servidor
      });
      if (response.data && response.data.message) {
        alert(response.data.message);
        setShowRegister(false);
      }
    } catch (err) {
      alert(err.response ? err.response.data.message : 'Erro ao registrar o usuário. Por favor, tente novamente.');
    }
  };

  return (
    <div className="login-container">
      {showRegister ? (
        <div className="login-card">
          <h3>Fazer Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label>Digite seu E-mail:</label>
              <input
                type="ds_email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Digite sua Senha:</label>
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Digite seu Nome:</label>
              <input
                type="text"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Digite seu CPF:</label>
              <input
                type="text"
                value={registerCPF}
                onChange={(e) => setRegisterCPF(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Digite o DDD:</label>
              <input
                type="text"
                value={registerDDD}
                onChange={(e) => setRegisterDDD(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Digite seu Telefone:</label>
              <input
                type="text"
                value={registerPhone}
                onChange={(e) => setRegisterPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit">Registrar</button>
          </form>
          <button onClick={() => setShowRegister(false)}>Voltar ao Login</button>
        </div>
      ) : (
        <div className="login-card">
          <img
        src={logoImage}
        alt="Logo"
        className="login-image"
        />
          <h2>Fazer Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Digite seu E-mail:</label>
              <input
                type="ds_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Digite sua Senha:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <div className="register-section">
            <p>Não tem uma conta?</p>
            <button onClick={() => setShowRegister(true)}>Registre-se</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
