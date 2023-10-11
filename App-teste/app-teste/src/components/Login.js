import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');  // Estado para o email no formulário de login
  const [password, setPassword] = useState('');  // Estado para a senha no formulário de login
  const [error, setError] = useState('');  // Estado para exibir mensagens de erro

  const [showRegister, setShowRegister] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sua lógica de login aqui ...
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', {
        email: registerEmail,
        password: registerPassword
      });
      if (response.data && response.data.message) {
        alert(response.data.message);
        setShowRegister(false);
      }
    } catch (err) {
      alert("Erro ao registrar o usuário. Por favor, tente novamente.");
    }
  };

  return (
    <div className="login-container">
      {showRegister ? (
        <div className="login-card">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            {/* ... campos do formulário de registro ... */}
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
