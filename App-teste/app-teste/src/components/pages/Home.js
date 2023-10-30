import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Home.css';
import homelogo from '../images/logo-site-preto.png';


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
    <div className="home-container">
      <h1>
        Bem vindo ao <span>Controle de Horas - Uniedu</span>
      </h1>
      <p>Cadastre-se em uma Demanda!</p>
      <a href="/demandas">Escolher Demanda </a>
      <img src={homelogo} alt='homelogo' className="home-logo" />
    </div>
  </div>
);
  
}

export default Home;
