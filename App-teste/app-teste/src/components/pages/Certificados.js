import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Certificados() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redireciona o usuário para a página de login se não houver token.
    }
  }, [navigate]);

  return (
    <div>
      <h1>Certificados</h1>
      {/* Restante do conteúdo da página Certificados */}
    </div>
  );
}

export default Certificados;