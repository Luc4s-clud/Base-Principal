import React from 'react';

function HomeView({ Home }) 
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
        </div>
      );
  
  export default HomeView;