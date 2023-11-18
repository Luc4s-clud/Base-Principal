import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../pages/Bolsas.css';


function Bolsas() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redireciona o usuário para a página de login se não houver token.
    }
  }, [navigate]);

  return (
    <div className="bolsas-container">
      <h1>Cadastro de Bolsas</h1>
      <p>Não possui uma bolsa Uniedu? <a href="https://bolsasuniedu.sed.sc.gov.br/iesinscricaoinicial.aspx" target="_blank" rel="noreferrer" className="image-link">Clique Aqui</a> para se cadastrar em uma!</p>
      <p>Após fazer o cadastro, vá para a página <Link to="/demandas">Demandas</Link> para se inscrever em uma demanda!</p>
    </div>
  );
}

export default Bolsas;