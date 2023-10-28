import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Home.css';
import Uniedu from '../images/uniedu1.png';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário possui um token de autenticação
    const token = localStorage.getItem('token');
    if (!token) {
      // Se não possui, redireciona para a tela de login
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Limpa o token de autenticação do localStorage
    localStorage.removeItem('token');
    // Redireciona para a tela de login
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1>Controle de Horas - <span> Uniedu </span> </h1>
      <p>Cadastro de Bolsas</p>
      <img src={Uniedu} alt='uniedu' />
    </div>,
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>

  );
}

export default Home;
