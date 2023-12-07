import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

function PerfilView({ user }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div className="perfil-container">
      <h1>Perfil</h1>
      <div className="perfil-card">
        <p><strong>Nome: </strong>{user.nm_usuario}</p>
        <p><strong>Email: </strong> {user.ds_email}</p>
        <p><strong>Telefone: </strong> {user.nr_telefone}</p>
        <p><strong>CPF: </strong> {user.nr_cpf}</p>
        <button onClick={handleLogout} className="logout-button" style={{ width: '100px', margin: '10px' }}>Sair</button>
      </div>
    </div>
  );
}

export default PerfilView;
