// Home.js
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../pages/Home.css';
import homelogo from '../images/logo-site-preto.png';
import LinkButton from '../layout/LinkButton';
import ActivityBox from '../layout/ActivityBox';

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
        <p>Inscreva-se em uma Demanda!</p>
        <LinkButton to="/demandas" text="Escolher demanda" />
        <p2>Não possui uma bolsa Uniedu? Na página <Link to="/bolsas">Cadastro de Bolsas</Link> você saberá como se cadastrar!</p2>
        <img src={homelogo} alt='homelogo' className="home-logo" />
      </div>

      <ActivityBox isHomePage={true} />
    </div>
  );
}

export default Home;
