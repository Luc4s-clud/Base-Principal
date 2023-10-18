import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showRegister, setShowRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3050/login', {
        email: email,
        senha: password
      });
      if (response.data && response.data.message) {
        if (response.data.message === "Login bem-sucedido!") {
          alert("Login bem-sucedido!");
        } else {
          setError(response.data.message);
        }
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : "Erro ao tentar fazer login. Por favor, tente novamente.");
    }
    
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3050/register', {
        email: registerEmail,
        senha: registerPassword
      });
      if (response.data && response.data.message) {
        alert(response.data.message);
        setShowRegister(false);
      }
    } catch (err) {
      alert(err.response ? err.response.data.message : "Erro ao registrar o usuário. Por favor, tente novamente.");
    }
  };

  return (
    
    <div className="login-container">
      {showRegister ? (
        <div className="login-card">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Senha:</label>
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Registrar</button>
          </form>
          <button onClick={() => setShowRegister(false)}>Voltar ao Login</button>
        </div>
      ) : (
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Senha:</label>
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
            <button onClick={() => setShowRegister(true)}>Criar Conta</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

