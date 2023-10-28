import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../layout/Navbar'; // Importe o componente de barra de navegação
import '../pages/Home.css';
import Uniedu from '../images/uniedu1.png';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <NavBar /> {/* Renderize a barra de navegação na rota /home */}
      <div className="home-container">
        <h1>Controle de Horas - <span> Uniedu </span> </h1>
        <p>Cadastro de Bolsas</p>
        <img src={Uniedu} alt='uniedu' />
      </div>
    </div>
  );
}

export default Home;
