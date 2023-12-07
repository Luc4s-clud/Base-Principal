import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bolsaIcone from '../images/bolsa-icone.png';
import demandaIcone from '../images/demanda-icone.png';

import '../pages/Bolsas.css';

function Bolsas() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="bolsas-container">
      <h1>Cadastro de Bolsas</h1>
      <div className="boxes-container">
      {/* Box 1 */}
        <a href="https://bolsasuniedu.sed.sc.gov.br/iesinscricaoinicial.aspx" target="_blank" rel="noreferrer" className="custom-box">
          <div className="button-box">
            <img src={bolsaIcone} alt="bolsa-icone" className="bolsa-icone" />
            <div className="text-container">
              <span className="bolsas-title">Bolsas de estudo</span>
              <p>Cadastre-se em uma bolsa de estudo.</p>
            </div>
          </div>
        </a>
      {/* Box 2 */}
        <Link to="/demandas" className="custom-box">
          <div className="button-box">
            <img src={demandaIcone} alt="bolsa-icone" className="bolsa-icone" />
            <div className="text-container">
              <span className="bolsas-title">Demandas</span>
              <p>Se inscreva em uma demanda.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Bolsas;
