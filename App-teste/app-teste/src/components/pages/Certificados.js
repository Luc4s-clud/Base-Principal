import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Certificados.css';

function Certificados() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redireciona o usuário para a página de login se não houver token.
    }
  }, [navigate]);

  return (
    <div className="certificados-container">
      <h1>Certificados</h1>
      <p className="certificados-texto">Clique no botão abaixo para baixar seu certificado</p>
      <a href="../images/certificado.png" download="certificado.png">
        <button className="botao-certificado">Baixar Certificado</button>
      </a>
    </div>
  );
}

export default Certificados;