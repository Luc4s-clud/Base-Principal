import React from 'react';
import '../pages/Home.css';
import Uniedu from '../images/uniedu1.png';

function Home() {
  return (
    <div className="home-container">
      <h1>Controle de Horas - <span> Uniedu </span> </h1>
      <p>Cadastro de Bolsas</p>
      <img src={Uniedu} alt='uniedu' />
    </div>
  );
}

export default Home;
